# Engineering history

This page summarizes technical work that can be represented in the public laboratory without exposing private source, credentials, raw operational logs, or unique device identifiers.

## Reliability and execution

Recent engineering rounds established and refined:

- structured terminal states for runs and tool execution;
- persisted execution activity and transcript continuity;
- recovery after process interruption;
- per-session execution ownership;
- cancellation and stop behavior;
- explicit user-decision points;
- workspace-safe filesystem operations;
- structured diagnostics.

These changes were driven by a combination of adversarial review and device playtesting.

## Project preview and workspace control

The project workflow gained a sanctioned local preview path for web projects, workspace import/export, and Git operations scoped to the project workspace.

The public record can track these capabilities as workflow tests rather than exposing implementation internals.

## Attachments and project context

Recent work addressed:

- binary-file handling;
- PDF extraction behavior;
- image input and retry persistence;
- attachment size/prompt accounting;
- cross-model task context;
- context preparation and compaction.

These are useful candidates for repeatable end-to-end evaluation records.

## Model execution

The project has a dedicated local-inference evaluation track covering:

- model loading and failure diagnostics;
- cold and warm execution;
- prompt prefill;
- generation throughput;
- tool selection and argument generation;
- context/cache behavior;
- stop responsiveness.

The llama.cpp 0.5.0 integration is now part of the engineering baseline, while the earlier 0.4.1 measurements remain historical comparison data.

## Android runtime constraints

The evaluation history also covers Android-specific conditions affecting long-running development workflows:

- process lifecycle;
- background execution;
- battery-management behavior;
- thermal/resource conditions;
- network interruption and recovery;
- storage and permission constraints.

These can become a dedicated public dataset as repeat measurements accumulate.


## 2026-10-06 validation window

The current development line reached **0.1.1-alpha.2** and added a new set of measured records to the public dataset:

- the live local-model end-to-end path completed **3/3** runs on an Android AVD, including a real chat send, the expected `list_directory` call, KV-cache reuse and a durable answer;
- the external process-death matrix completed **10/10** cases, including recovery of composer text and ordered attachments and explicit handling of a missing image copy;
- the broader instrumented validation window completed **361 cases across 95 classes**, with **342 passed, 19 skipped and 0 completed-case failures** in the four recorded chunks;
- one local-inference sampling case remains an **open measured red**: the model emitted no tool call in **0/3** executions despite the expected shortlist being present. This remains a model-sampling investigation rather than a declared tool-plumbing failure.

The public dataset records these as append-only measurements. Device identity, package paths, process identifiers, credentials and raw operational logs remain outside the public record.

## 2026-10-06 validation window

The current development line reached **0.1.1-alpha.2** and added a new set of measured records to the public dataset:

- the live local-model end-to-end path completed **3/3** runs on an Android AVD, including a real chat send, the expected `list_directory` call, KV-cache reuse and a durable answer;
- the external process-death matrix completed **10/10** cases, including recovery of composer text and ordered attachments and explicit handling of a missing image copy;
- the broader instrumented validation window completed **361 cases across 95 classes**, with **342 passed, 19 skipped and 0 completed-case failures** in the four recorded chunks;
- one local-inference sampling case remains an **open measured red**: the model emitted no tool call in **0/3** executions despite the expected shortlist being present. This remains a model-sampling investigation rather than a declared tool-plumbing failure.

The public dataset records these as append-only measurements. Device identity, package paths, process identifiers, credentials and raw operational logs remain outside the public record.

## Next public data layers

The laboratory can progressively add:

1. repeat measurements for the same protocol across revisions;
2. API-model workflow results;
3. process-kill and recovery experiments;
4. task-state consistency tests;
5. notification and user-decision tests;
6. context/routing measurements;
7. aggregate charts derived from the raw public records;
8. historical release/playtest summaries.
