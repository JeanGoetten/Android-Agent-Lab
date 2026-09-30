# Evaluation

The evaluation program measures the reliability of Android Agent as a project-control system on Android.

## Primary areas

### Project control
- creation and modification of project files;
- task execution;
- task state consistency;
- user-decision handling;
- recovery after interrupted work.

### Android constraints
- process and task survival;
- battery-management and background-execution constraints;
- storage permissions and workspace boundaries;
- network availability and timeout behavior.

### Model layer
- API model reliability and latency;
- model routing;
- context compression and preparation;
- local inference as a secondary execution path;
- behavior across different device classes when the test matrix permits comparison.

### User-facing reliability
- notification behavior;
- execution-state visibility;
- safe cancellation and stopping;
- restoration of project/chat state;
- failure messages and recovery paths.

## Interpreting model performance

Model throughput is not treated as the sole indicator of system viability.

For low-end hardware, API-based inference is currently the principal model path. Local inference measurements are retained as evidence for a separate capability track and will be compared across hardware classes later.

A result is not generalized beyond the population and conditions under which it was measured.

## Results format

Future result records will use a compact schema such as:

| Field | Meaning |
| --- | --- |
| Test | Test identifier |
| Class | Evaluation category |
| Runtime | Relevant runtime/software snapshot |
| Model path | API or local |
| Device class | Sanitized hardware class |
| Protocol | Evaluation protocol version |
| Result | Observed outcome |
| Status | measured / derived / estimated / planned |
| Notes | Constraints and interpretation |
