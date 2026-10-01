# Data boundaries

The public laboratory records technical information required to understand and reproduce published evaluations.

## Technical data

The public record can include:
- software and runtime revisions;
- model identifiers and execution paths;
- sanitized device classes;
- Android platform information;
- test protocols;
- measured timings and outcomes;
- aggregate resource measurements;
- structured logs and derived metrics when appropriate.

## Personal and operational data

Personal identifiers, credentials, authentication material, private filesystem paths, unique device identifiers, and internal infrastructure details are handled separately from the public test dataset.

## Dataset principle

The goal is to preserve the technical signal of a test while removing information that has no value for interpreting the result.

This boundary is applied during publication rather than after the public dataset has been assembled.
