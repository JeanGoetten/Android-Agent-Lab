# Engineering history

This public summary records validated outcomes and released capabilities. It intentionally excludes private implementation details and internal operational history.

## Reliability and workflow continuity

The development line has progressively improved durable task state, restoration after interruption, project-level workflows, and user-visible decisions. Evaluation distinguishes controlled recovery tests from observations of long-running work in ordinary device use.

### October 6 baseline

Version **0.1.1-alpha.2** added measured public validation records:
- live local-model end-to-end flow: **3/3** runs;
- external process-death draft recovery: **10/10** cases;
- instrumented validation chunks: **342 passed, 19 skipped, 0 completed-case failures**;
- a separate local tool-call sampling case remained unresolved: **0/3** calls.

The unresolved result remains visible rather than being hidden by the aggregate.

## October 10–13 validation checkpoints

Subsequent release checkpoints include complete automated instrumented suites and narrower controlled emulator tests. These remain distinct kinds of evidence.

| Revision | Measurement | Outcome |
| --- | --- | --- |
| alpha.8 | Complete instrumented suite | 451 cases, 0 failures, 39 skipped |
| alpha.9 | Complete instrumented suite | 452 cases, 0 failures, 39 skipped |
| alpha.18 | Complete instrumented suite | 494 cases, 0 failures, 39 skipped |
| alpha.19 | Complete instrumented suite | 496 cases, 0 failures, 39 skipped |
| alpha.22 | Scoped file workflow verification | 50 cases, 0 failures |
| alpha.23 | Scoped project-board verification | 47 cases, 0 failures |
| alpha.31 | Scoped task-decision verification | 23 Android cases, 0 failures; 1,532 JVM cases, 0 failures, 2 skipped |

A passing scoped test does not establish complete product acceptance. The revision-specific dataset records preserve test environment and limitations.

## Physical playtest observations

A physical playtest of **alpha.26** observed an ongoing task after an extended period away from the application. Tool work and artifacts were observed in the session. This is meaningful continuity evidence, **not** proof that the Android process was terminated and recovered, or that useful work ran continuously throughout the entire interval.

A separate short local-inference measurement on a 32-bit ARM device recorded **2.92 generated tokens/s** on average across three valid runs and **5.402 seconds** median time to first token. This describes a particular small benchmark rather than general agent competence.

## Product-facing progress

Recent checkpoints have covered project navigation, file search and preview, project-board interaction, task drafts, contextual decisions and notifications. Implementation progress, scoped automated tests and physical-device acceptance are reported as separate milestones.

## Next evaluations

Useful future public series include repeated task-continuity trials under controlled interruption conditions, feedback latency, contextual decision visibility, and comparisons on matching hardware and workloads. No test is assigned a passing result in advance.

See [the versioned evaluation dataset](../evaluation/results/public-results.json) and [methodology](methodology.md) for the evidence boundaries.
