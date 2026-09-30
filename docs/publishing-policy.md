# Publishing policy

Android Agent Lab is a derived public record of the private Android Agent project.

The publication pipeline is intentionally one-way:

**private development → sanitization → review → public publication**

The public repository must never become a mirror of the private source tree.

## Allowed

Publish information that is:
- technically useful to external readers;
- reproducible without private infrastructure;
- free of credentials and personal data;
- stable enough to be maintained publicly;
- explicitly classified as measured, derived, estimated, or planned.

## Excluded

Do not publish:
- source files from the private application repository unless separately approved for public release;
- API keys, tokens, credentials, cookies, or private endpoints;
- maintainer names, account identifiers, local usernames, or personal paths;
- exact device identifiers, serial numbers, or other unnecessary hardware identifiers;
- raw logs containing user content or operational metadata;
- private branch names or internal workflow details;
- unreleased APKs, builds, demos, or distribution artifacts.

## Result sanitization

Before publication, measurements should be reduced to the information needed to interpret the result.

For example, a public device description may use a hardware class and Android API level instead of a commercial handset model. Internal logs should be converted into structured observations rather than copied verbatim.

When a result depends on a private condition that materially changes interpretation, the public record should state the relevant constraint without exposing the private identifier itself.

## Review rule

If a record cannot be published without exposing unnecessary private information, publish a sanitized summary or omit the record.
