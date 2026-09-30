# System scope

Android Agent is being developed as an Android project-control workspace with an AI-assisted execution layer.

The public architecture description focuses on stable system boundaries rather than private implementation details.

## Core concerns

1. **Project workspace** — files and project state are organized around user projects.
2. **Execution control** — operations are represented as tasks with explicit state and user-decision points.
3. **Android runtime resilience** — work must account for process death, battery policies, background execution, storage restrictions, permissions, and network interruptions.
4. **Model layer** — API-hosted and local models can participate in reasoning and execution, subject to routing and device constraints.
5. **Context preparation** — project context is selected and compressed before model calls to reduce unnecessary tokens and latency.
6. **Safety boundaries** — project operations are constrained by workspace and platform rules rather than granting unrestricted device control.
7. **Presentation** — the mobile UI exposes execution state, project structure, decisions, and recovery paths.

## Model strategy

The model layer is deliberately not the whole architecture.

On low-end Android hardware, API models are currently the primary path. Local models remain useful for experimentation and for future comparisons across hardware classes.

The system is also intended to avoid sending every trivial decision to a model. Deterministic routing, local handling of simple interactions, and context preparation are part of the broader execution architecture.

## Public documentation boundary

Implementation details are published only when they are useful for understanding the architecture or reproducing a public evaluation. Private source structure, credentials, operational paths, and maintainer-specific details are outside this document's scope.
