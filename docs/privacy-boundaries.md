# Data boundaries

The public laboratory describes reproducible observations without reproducing private project materials.

## Eligible technical information

- tested software versions and generalized runtime environments;
- non-identifying device classes, ABI and Android platform;
- controlled test protocols and aggregate numerical outcomes;
- explicit limitations and separate measured, inferred, and not-evaluated states;
- capability-level historical summaries of already released behavior.

## Excluded information

- personal identifiers, unique handset attributes, credentials, private conversations or user workspaces;
- raw device logs, internal filesystem paths, process identifiers, infrastructure, access and account metadata;
- private source locations and sensitive implementation details;
- proprietary orchestration, internal security design, unpublished capabilities or commercial roadmap specifics;
- administrative circumstances irrelevant to interpreting test evidence.

## Publication principle

Retain the smallest sufficient public dataset. Generalize environment fields and redact sensitive provenance before commit. A public record should report **what was observed under which conditions**, not reveal the private execution trace.

A missing verification is neither a passed nor a failed test; label it plainly as not evaluated. Review every future addition for identifiability, commercial exposure and unintended disclosure.
