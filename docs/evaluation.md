# Evaluation

Android Agent Lab measures the behavior of Android Agent through repeatable tests and real project workflows.

## Evaluation areas

| Area | Examples |
| --- | --- |
| Project control | Project creation, files, tasks, execution |
| Runtime resilience | Process lifecycle, interruptions, recovery |
| Android constraints | Battery, background execution, storage, permissions |
| Network | API availability, timeouts, retries, recovery |
| Models | Latency, response behavior, routing, context |
| User control | Decisions, cancellation, notifications, execution state |
| End-to-end workflows | Complete project operations |

## Model evaluation

Testing can involve multiple API models in the same project workflow. Measurements can capture model response time, execution behavior, reliability, and interaction with the surrounding Android runtime.

Local model execution is recorded with explicit runtime identity and execution environment. llama.cpp version is a first-class field rather than being inferred from a revision string. Physical devices and Android Virtual Devices are separate targets; they are never silently pooled into one performance series.

## Data model

Each test record should make the experimental conditions explicit.

| Field | Description |
| --- | --- |
| Test | Test identifier |
| Category | Evaluation category |
| Revision | Product/software revision |
| Runtime | Engine, version, commit and build variant when known |
| Model | Model identifier |
| Path | API, local or mixed |
| Environment | Physical, AVD, CI AVD, desktop or unknown |
| Device class | Hardware/emulator class |
| ABI | Native ABI when relevant |
| Platform | Android platform level |
| GPU | Relevant GPU/driver information when available |
| Protocol | Test protocol |
| Result | Observed outcome |
| Duration | Time measurement where applicable |
| Status | Evidence status |
| Notes | Interpretation and conditions |

## Current comparison practice

The llama.cpp experiment provides a controlled example: v0.4.1 and v0.5.0 were paired on the same physical SM-M135M, same model, same instrumentation and fixed-work prompts. The five-repetition battery was neutral within the measured noise band. A separate Vulkan build is recorded as an experimental build variant and is not conflated with the CPU-only runtime.

The round-73 CI AVD result is also kept separate: the first instrumented CI run used Android 14/API 34 x86_64 in a headless emulator and produced three failures among 330 tests. The same classes were green on the physical phone, so the record is treated as an environment-sensitive observation requiring triage rather than as a product-wide pass/fail claim.

## Results

The evaluation/ directory is the canonical public location for structured test data.

Human-readable summaries may be generated from those records for the website and documentation.
