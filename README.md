# Android Agent Lab

Android Agent Lab is the public technical surface for Android Agent.

It documents the project's architecture, evaluation methodology, selected measured results, and constraints without exposing the private source repository or maintainer-specific operational data.

## Scope

The project is an Android development workspace centered on controlling and operating user projects safely on Android. The primary engineering problem is reliable project control under mobile-platform constraints: process termination, background execution limits, storage boundaries, permissions, network variability, task state, and other conditions that do not map cleanly to a desktop development environment.

AI models are a component of that system, not the sole focus.

For low-end Android devices, the current evaluation direction prioritizes API-based models. Local inference remains an experimental capability and will be compared across device classes only when the test matrix includes additional hardware.

## Public / private boundary

This repository is a curated publication surface, not a mirror of the private source repository.

Public material may include:
- architecture and design decisions;
- evaluation protocols;
- sanitized measurements and aggregate results;
- runtime/model version information when useful for reproducibility;
- documented limitations and known failure modes.

Private material remains excluded:
- source code from the private application repository;
- credentials, tokens, secrets, and private endpoints;
- maintainer identity or personal data;
- exact device identifiers and serial information;
- filesystem paths and internal infrastructure details;
- raw logs containing user or operational data;
- unreleased builds and demos.

## Status

The public laboratory is being established. Results will be published incrementally as evaluation protocols stabilize.

See [docs/methodology.md](docs/methodology.md) for the publication model and [docs/evaluation.md](docs/evaluation.md) for the evaluation scope.
