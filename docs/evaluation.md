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

Local model execution is also recorded where relevant. Results are associated with their hardware and runtime conditions so that measurements from different device classes can be compared as the dataset expands.

## Data model

Each test record should make the experimental conditions explicit.

| Field | Description |
| --- | --- |
| Test | Test identifier |
| Category | Evaluation category |
| Revision | Software/runtime revision |
| Model | Model identifier |
| Path | API or local |
| Device class | Hardware class |
| Platform | Android platform level |
| Protocol | Test protocol |
| Result | Observed outcome |
| Duration | Time measurement where applicable |
| Status | Evidence status |
| Notes | Interpretation and conditions |

## Results

The evaluation/ directory is the canonical public location for structured test data.

Human-readable summaries may be generated from those records for the website and documentation.
