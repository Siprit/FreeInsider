# Sample Data Cloud configuration

These files are **templates** for architects and admins. **Data Model Object (DMO) API names, field names, and stream IDs differ by org and Salesforce release**—reconcile every key in Data Cloud Setup and Data Explorer before production.

| File | Purpose |
|------|---------|
| [objects-and-use-cases.md](objects-and-use-cases.md) | Maps Data Cloud objects/streams to business use cases |
| [website-engagement-events.example.json](website-engagement-events.example.json) | PWA Kit → Website engagement event types and payload shape |
| [streams/b2c-commerce-intelligence.example.json](streams/b2c-commerce-intelligence.example.json) | B2C Commerce Intelligence connector — conceptual stream rows |
| [identity-resolution-rules.example.json](identity-resolution-rules.example.json) | Minimal identity match rules (conceptual) |
| [segments.example.json](segments.example.json) | Starter segments as **logical definitions** (implement in Segment Builder) |
| [calculated-insights.example.json](calculated-insights.example.json) | Example calculated insight intents |
| [activations/marketing-cloud-engagement.example.json](activations/marketing-cloud-engagement.example.json) | Activation to Marketing Cloud Engagement (conceptual) |

**Related:** [PWA Kit Data Cloud config](../examples/pwa-kit-config-data-cloud.example.cjs), [02-data-cloud-pwa-kit.md](../02-data-cloud-pwa-kit.md).
