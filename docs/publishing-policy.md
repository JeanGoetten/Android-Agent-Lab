# Publishing policy

Android Agent Lab is a curated public technical record. Publication follows:

**development → verification → sanitization and commercial-sensitivity review → structured result → publication**

## Publication boundary

Publish only information needed to interpret a finding: version, generalized environment, test method, measured outcome, scope, and caveats.

Do **not** disclose:
- personal information, unique device identity, accounts, credentials, tokens, private project content, or identifiable test conversations;
- private repository locations, raw diagnostic logs, process IDs, internal file paths, infrastructure or access details;
- unreleased product differentiators, unpublished implementation mechanisms, security-sensitive design specifics, proprietary prompts or orchestration, and commercially sensitive roadmap details;
- internal administrative or account circumstances unrelated to the technical meaning of a measurement.

A feature planned or developed privately is not automatically appropriate for public documentation. Public discussion of architecture should remain at capability level unless separately cleared.

## Honest technical status

Differentiate complete suite results from scoped checks, emulator from physical-device observations, and built artifacts from field acceptance. Unperformed or interrupted tests should be labelled **not evaluated** or **inconclusive**, without inferring either failure or success. Exclude nontechnical reasons for absence of evidence.

Do not equate a distributed binary with an independently validated user journey. Do not infer process-death recovery merely from successful app reopening.

## Data and provenance

Prefer machine-readable, append-only results. Record version and protocol, anonymized environment, measured values, original limitations, and a non-public provenance reference where needed. Preserve earlier failures and skipped cases without silently rewriting history. Maintain exact source evidence privately while publishing only its sanitized interpretation.

Public-site copy must undergo the same checks as dataset entries. Reviewed records are safe for publication only after removal of commercially sensitive or identifiable content.
