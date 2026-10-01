# System architecture

Android Agent is an Android development workspace with an AI-assisted execution layer.

The system brings project structure, task execution, model interaction, Android runtime behavior, and user control into one mobile workflow.

## Core areas

1. **Project workspace** — projects contain their files, conversations, and working state.
2. **Execution control** — operations are represented as tasks with explicit state and user-decision points.
3. **Runtime resilience** — execution accounts for Android process lifecycle, battery policies, background execution, storage, permissions, and network interruptions.
4. **Model layer** — API-hosted and local models participate in project reasoning and execution.
5. **Context preparation** — relevant project context is selected and prepared before model calls.
6. **Routing** — deterministic handling and model routing can select the appropriate execution path for each operation.
7. **Presentation** — the mobile interface exposes project structure, execution state, decisions, progress, and recovery.

## Evaluation relationship

The laboratory follows these architectural areas through targeted tests and end-to-end workflows. Test records can therefore be associated with the subsystem or workflow they exercise.
