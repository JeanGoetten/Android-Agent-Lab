# Privacy and data boundaries

This document defines the minimum boundary between the private Android Agent project and Android Agent Lab.

## Private by default

The following remain private unless separately approved:
- maintainer identity and account metadata;
- exact development-machine paths;
- device serials and unique hardware identifiers;
- credentials and authentication material;
- raw user/project content;
- private repository references;
- raw logs and crash dumps when they contain operational or personal data;
- internal network, deployment, and infrastructure details.

## Public by design

The public repository may contain:
- architecture descriptions;
- technical design rationale;
- evaluation protocols;
- sanitized test conditions;
- aggregate measurements;
- known limitations;
- reproducible public documentation;
- public-facing project status.

## Device information

Hardware is reported at the least-specific level that still matters to the result. Commercial device names are not required when a device class, Android API level, CPU/ABI class, or memory class is sufficient to interpret a measurement.

## Cross-repository publication

A future automated publication pipeline may read approved data from the private project and emit sanitized records into this repository. Such a pipeline must publish an explicit public schema rather than copying private files wholesale.

The public repository must remain usable even if the private repository is unavailable.
