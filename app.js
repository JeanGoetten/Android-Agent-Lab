(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ENV = { physical: "Physical device", avd: "Emulator", ci_avd: "CI emulator", unknown: "Unspecified" };
  const cap = s => String(s || "").replace(/[_-]/g, " ").replace(/^./, c => c.toUpperCase());
  const envOf = r => r.environment?.type || "unknown";

  // Theme toggle (follows the system until the visitor chooses)
  const root = document.documentElement, KEY = "aal-theme";
  try { const t = localStorage.getItem(KEY); if (t) root.dataset.theme = t; } catch {}
  const nav = $(".site-header nav");
  if (nav) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "theme-toggle";
    const dark = () => root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const sync = () => { b.textContent = dark() ? "Light" : "Dark"; b.setAttribute("aria-label", "Switch to " + (dark() ? "light" : "dark") + " theme"); };
    b.onclick = () => { const n = dark() ? "light" : "dark"; root.dataset.theme = n; try { localStorage.setItem(KEY, n); } catch {} sync(); };
    sync(); nav.append(b);
  }

  // Highlight the nav link of the section in view
  const links = $$('.site-header nav a[href^="#"]');
  if (links.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.getAttribute("href") === "#" + e.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
    }), { rootMargin: "-40% 0px -55% 0px" });
    links.forEach(a => { const s = $(a.getAttribute("href")); if (s) io.observe(s); });
  }

  if (!$("#results-list") && !$("#readout")) return;

  // Dataset
  const load = fetch("evaluation/results/public-results.json", { cache: "no-store" })
    .then(r => { if (!r.ok) throw new Error("dataset unavailable"); return r.json(); });

  const card = r => {
    const m = Object.entries(r.measurements || {}).filter(([k]) => k !== "note");
    const env = r.environment || {}, rt = r.runtime || {};
    const facts = [["Device", env.device_class || r.device_class], ["Android", env.android || r.android], ["ABI", env.abi], ["GPU", env.gpu],
      ["Runtime", [rt.engine, rt.version].filter(Boolean).join(" ")], ["Build", rt.build_variant], ["Execution", r.execution_path],
      ["Protocol", r.protocol], ["Revision", r.revision], ["Source", r.source], ["Notes", r.notes]].filter(f => f[1]);
    return `<article class="result-card">
      <div class="result-top"><span class="result-category">${esc(cap(r.category))}</span><span class="evidence ${esc(r.evidence)}">${esc(cap(r.evidence))}</span></div>
      <h3>${esc(r.title)}</h3><p>${esc(r.result)}</p>
      ${m.length ? `<dl class="metrics">${m.map(([k, v]) => `<div class="metric"><dt>${esc(k.replaceAll("_", " "))}</dt><dd>${esc(Array.isArray(v) ? v.join(", ") : typeof v === "object" ? JSON.stringify(v) : v)}</dd></div>`).join("")}</dl>` : ""}
      ${r.measurements?.note ? `<p class="note">${esc(r.measurements.note)}</p>` : ""}
      <div class="result-meta"><span class="env env-${esc(envOf(r))}">${ENV[envOf(r)] || ENV.unknown}</span><span>${esc(r.date)}</span>${r.model ? `<span>${esc(r.model)}</span>` : ""}</div>
      ${facts.length ? `<details><summary>Test conditions</summary><dl class="facts">${facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}</dl></details>` : ""}
    </article>`;
  };

  const countUp = el => {
    const to = +el.dataset.count;
    if (reduce || !to) { el.textContent = to; return; }
    const t0 = performance.now();
    (function f(t) { const p = Math.min(1, (t - t0) / 900); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(f); })(t0);
  };

  const readout = (el, data) => {
    const recs = data.records, latest = recs.map(r => r.date).sort().pop();
    const segs = Object.keys(ENV).map(k => [k, recs.filter(r => envOf(r) === k).length]).filter(s => s[1]);
    el.innerHTML = `<div class="readout-head"><span>dataset ${esc(data.dataset_version || "")}</span><span>updated ${esc(data.last_updated || latest)}</span></div>
      <div class="readout-stats">
        <div><strong data-count="${recs.length}">0</strong><span>published records</span></div>
        <div><strong data-count="${new Set(recs.map(r => r.category)).size}">0</strong><span>test categories</span></div>
        <div><strong>${esc(latest)}</strong><span>latest recorded test</span></div>
      </div>
      <div class="readout-bar" role="img" aria-label="Records by execution environment">${segs.map(([k, n]) => `<i class="seg-${k}" style="flex:${n}" title="${ENV[k]}: ${n}"></i>`).join("")}</div>
      <ul class="readout-key">${segs.map(([k, n]) => `<li><i class="seg-${k}"></i>${ENV[k]} <b>${n}</b></li>`).join("")}</ul>`;
    $$("[data-count]", el).forEach(countUp);
  };

  const filters = recs => {
    const chips = $("#chips"), q = $("#q"), env = $("#env"), ev = $("#evidence"), list = $("#results-list"), count = $("#count");
    let cat = "all";
    chips.innerHTML = ["all", ...new Set(recs.map(r => r.category))].map(c => `<button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${c === "all"}">${c === "all" ? "All" : esc(cap(c))}</button>`).join("");
    const apply = () => {
      const s = q.value.trim().toLowerCase();
      const out = recs.filter(r => (cat === "all" || r.category === cat) && (env.value === "all" || envOf(r) === env.value) && (ev.value === "all" || r.evidence === ev.value) && (!s || JSON.stringify(r).toLowerCase().includes(s)));
      list.innerHTML = out.length ? out.map(card).join("") : '<p class="loading">No records match these filters. Clear a filter to see more.</p>';
      count.textContent = `Showing ${out.length} of ${recs.length} records`;
    };
    chips.onclick = e => { const b = e.target.closest(".chip"); if (!b) return; cat = b.dataset.cat; $$(".chip", chips).forEach(c => c.setAttribute("aria-pressed", c === b)); apply(); };
    [q, env, ev].forEach(x => x.addEventListener("input", apply));
    apply();
  };

  load.then(data => {
    const recs = [...data.records].sort((a, b) => String(b.date).localeCompare(String(a.date)));
    const list = $("#results-list"), ro = $("#readout");
    if (ro) readout(ro, data);
    if ($("#filters")) filters(recs);
    else if (list) {
      const n = +list.dataset.limit || recs.length;
      list.innerHTML = recs.slice(0, n).map(card).join("");
      const more = $("#results-more");
      if (more && recs.length > n) { more.textContent = `See all ${recs.length} results`; more.hidden = false; }
    }
  }).catch(() => {
    const ro = $("#readout"); if (ro) ro.hidden = true;
    const list = $("#results-list");
    if (list) list.innerHTML = '<p class="loading">The published dataset could not be loaded. <a href="evaluation/results/public-results.json">Open the data file directly.</a></p>';
  });
})();
