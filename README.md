# Android Agent Lab

Android Agent Lab is the public technical record for Android Agent.

It presents the project's engineering work through architecture notes, evaluation protocols, test data, measured results, technical observations, and historical records.

## Project focus

Android Agent is an Android development workspace for controlling user projects with AI-assisted execution.

The engineering record follows project control on Android: maintaining task state, executing project operations, handling interruptions and platform constraints, coordinating model calls, and giving the user clear control over ongoing work.

The model layer supports this workflow through API-hosted and local models. Current testing includes multiple API models and real project workflows.

## Evaluation

The laboratory records measurements from controlled tests and playtests. The dataset was updated on 2026-10-06 with the current 0.1.1-alpha.2 validation window, including live local inference, process-death recovery, the instrumented validation aggregate, and one explicitly published open local-inference red.

Evaluation areas include:
- project and file operations;
- task execution and state continuity;
- interruption and recovery;
- Android process and background constraints;
- battery-management behavior;
- network and API behavior;
- model response and execution characteristics;
- context preparation and routing;
- notifications and user-decision flows;
- performance across device classes.

**[Browse the published test results →](https://jeangoetten.github.io/Android-Agent-Lab/results.html)**

The [evaluation dataset](evaluation/README.md) is the canonical public location for structured test records.

## Documentation

- [System architecture](docs/architecture.md)
- [Evaluation](docs/evaluation.md)
- [Evaluation methodology](docs/methodology.md)
- [Publishing policy](docs/publishing-policy.md)
- [Data boundaries](docs/privacy-boundaries.md)
- [Engineering history](docs/engineering-history.md)
- [Public documentation index](docs/README.md)
- [GitHub Wiki](https://github.com/JeanGoetten/Android-Agent-Lab/wiki)

The Wiki is a navigation-oriented companion for stable explanations. Versioned technical records remain in the repository.

## Technical record

The repository can contain:
- structured test results;
- measured performance data;
- evaluation protocols;
- architecture documentation;
- technical observations;
- reproducible summaries;
- historical result records;
- charts and derived analysis.

The public site presents selected data in a readable interface while the repository preserves the underlying versioned records.

## Community

The public site includes a community portal for bug reports, feature requests, ideas, and UX feedback. GitHub Issues remain the public conversation and engineering record.

[Open the community portal](https://jeangoetten.github.io/Android-Agent-Lab/community.html)

[Open the GitHub Pages site](https://jeangoetten.github.io/Android-Agent-Lab/) · [Open the repository](https://github.com/JeanGoetten/Android-Agent-Lab)