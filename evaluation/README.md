# Evaluation data

This directory is the public dataset for Android Agent evaluation.

Structured results are the primary artifact. The website presents selected records from the same dataset in a readable form, while the repository keeps the machine-readable history versioned.

## Dataset

- [Public results](results/public-results.json)
- [Test-result schema](schemas/test-result.schema.json)
- [Evaluation scope](../docs/evaluation.md)
- [Evaluation methodology](../docs/methodology.md)

## Organization

- `results/` — sanitized published result records
- `tests/` — individual test records as the dataset grows
- `runs/` — execution runs or playtest sessions
- `metrics/` — derived metrics
- `schemas/` — machine-readable record definitions
- `summaries/` — human-readable result summaries

## Record fields

A test record can include:

- identifier and date
- software/runtime revision
- model and execution path
- sanitized device class and Android platform
- protocol and workflow class
- observed outcome
- timing and resource measurements
- evidence status
- provenance and notes

The dataset favors append-only historical records. Corrections preserve provenance.
