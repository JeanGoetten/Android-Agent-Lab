# Evaluation methodology

Android Agent Lab maintains a structured record of testing and engineering observations.

The objective is to make results comparable across software revisions, model/runtime revisions, workflows, and execution environments while keeping each measurement tied to its actual test conditions.

## Test record

A published result should identify, as applicable:

- test identifier;
- test category;
- software revision;
- runtime engine and version;
- model and execution path;
- execution environment (physical, avd, ci_avd, desktop, or unknown);
- device class, ABI, Android platform and relevant GPU;
- test protocol;
- observed result;
- duration or latency;
- success/failure state;
- relevant notes and provenance.

Runtime and environment are separate dimensions. A result must not encode a llama.cpp version only in a free-form revision string when the measurement is intended for runtime comparison. Likewise, a physical handset and an Android Virtual Device are distinct experimental targets even when they use the same Android API level.

## Result status

Results use explicit evidence states:

- **Measured** — directly observed during a test.
- **Derived** — calculated from measured data.
- **Estimated** — an approximation or model-based value.
- **Planned** — a test or measurement that has not yet been performed.

## Comparability rules

Performance comparisons should keep fixed work and relevant conditions aligned.

For local inference, the record should preserve at least:

- llama.cpp engine/version;
- model identity;
- ABI;
- device/environment type;
- thread count and effective context when relevant;
- prompt workload and token counts;
- warm-up/discard policy;
- thermal/power state when available.

Generation elapsed time is not directly comparable when compared arms emit different token counts; per-token throughput may still be comparable when the workload and measurement method are aligned.

Physical-device measurements and AVD measurements are not pooled into a single performance series. Cross-environment results are useful for identifying environment-sensitive failures, but a green result on one target does not erase a red result on another.

## Test dimensions

The laboratory can record project operations, runtime behavior, model execution, release validation, and complete end-to-end workflows.

## Data evolution

Results are stored as structured records whenever practical. New measurements are appended rather than silently replacing historical observations. When a later protocol supersedes an earlier one, the earlier record remains available and the newer record states the protocol change and provenance.

Schema version 1.1 separates runtime identity from execution environment so future llama.cpp comparisons can be queried without parsing prose.
