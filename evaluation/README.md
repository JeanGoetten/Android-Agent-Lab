# Evaluation data

This directory is the public dataset for Android Agent evaluation.

Structured results are the primary artifact. Documentation and the website can present the same underlying records as the dataset grows.

## Suggested organization

- tests/ — individual test records
- runs/ — execution runs or playtest sessions
- metrics/ — derived metrics
- schemas/ — machine-readable record definitions
- summaries/ — human-readable result summaries

## Record fields

A test record should include, when applicable:

- identifier
- date
- software/runtime revision
- model
- execution path
- device class
- Android platform
- protocol
- workflow class
- observed outcome
- timing
- resource measurements
- evidence status
- notes

The dataset should favor append-only historical records. Corrections should preserve provenance.
