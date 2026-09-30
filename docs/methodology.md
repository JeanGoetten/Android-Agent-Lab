# Evaluation methodology

Android Agent Lab treats evaluation as part of the system design rather than as a collection of isolated benchmarks.

Each published result should make it possible to identify:
- what was measured;
- under which test class;
- which software/runtime snapshot was used;
- whether the value was measured, derived, estimated, or planned;
- which constraints apply to the result.

## Current evaluation priority

The current priority is reliable project control on Android.

Relevant areas include:
- task execution and state continuity;
- recovery from process termination;
- behavior under Android battery and background-execution constraints;
- filesystem and workspace safety;
- network/API failures and recovery;
- model routing and context preparation;
- user-decision points;
- reproducibility of project operations.

### Model execution

The project uses both API-hosted and local models.

For low-end devices, API-hosted models are currently the primary path. Local inference is treated as a secondary capability because CPU-only inference at this hardware class can impose substantial latency.

A local-inference measurement such as approximately 2.91 tokens/second is therefore evidence about that execution path, not a project-wide performance target or a basis for generalizing to all Android devices.

Cross-device comparison will be introduced only when the test matrix includes multiple device classes.

## Publication classes

Every public result should be classified as one of:

- **Measured** — directly observed under a documented test protocol.
- **Derived** — calculated from published measurements.
- **Estimated** — explicitly modeled or approximated.
- **Planned** — a future test or capability, not an observed result.

## Reproducibility

Published measurements should identify the minimum information needed to reproduce the test without exposing private operational details.

The public record should prefer:
- device class over exact device identity;
- Android API level or platform family where relevant;
- software/runtime version;
- model family and configuration;
- test protocol version;
- aggregate outcome and relevant uncertainty.

Exact device identifiers, personal information, private paths, credentials, and raw operational logs are never required for public reproducibility.
