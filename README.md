# Android Agent Lab

Android Agent Lab is the public technical record for Android Agent.

It presents the project's engineering work through architecture notes, evaluation protocols, test data, measured results, and technical observations.

## Project focus

Android Agent is an Android development workspace for controlling user projects with AI-assisted execution.

The central engineering focus is reliable project operation on Android: maintaining task state, executing project operations, handling interruptions and platform constraints, coordinating model calls, and giving the user clear control over ongoing work.

The model layer supports this workflow through API-hosted and local models. Current testing includes multiple API models and examines their behavior within real project workflows.

## Evaluation

The laboratory records measurements from controlled tests and playtests.

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

Results are published with their test conditions and interpretation so that changes can be followed over time.

## Public technical record

The repository is designed as a durable public record of the project's engineering work.

It contains:
- evaluation protocols;
- structured test results;
- measured performance data;
- architecture documentation;
- technical observations;
- limitations and follow-up work.

See docs/methodology.md and docs/evaluation.md.
