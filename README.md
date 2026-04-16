# Insider AI → Salesforce: implementation package

This folder implements the architecture for replacing **Insider AI** with **Salesforce Data Cloud**, **Marketing Cloud Personalization (MCP)**, **B2C Commerce Einstein**, and **Marketing Cloud Engagement (MCE)** on a **PWA Kit** storefront.

| Document | Purpose |
|----------|---------|
| [00-implementation-sequence.md](00-implementation-sequence.md) | Ordered rollout steps |
| [01-entitlements-checklist.md](01-entitlements-checklist.md) | Licenses, meters, web push gap |
| [02-data-cloud-pwa-kit.md](02-data-cloud-pwa-kit.md) | PWA Kit engagement events, B2C Intelligence, identity, segments |
| [03-mcp-gtm-web.md](03-mcp-gtm-web.md) | MCP beacon, GTM, Commerce integration |
| [04-commerce-einstein-pwa-kit.md](04-commerce-einstein-pwa-kit.md) | Einstein Reco, caching, Shopper Context |
| [05-activation-mce-journeys.md](05-activation-mce-journeys.md) | Data Cloud → MCE, channels, web push |
| [06-gtm-consent-environments.md](06-gtm-consent-environments.md) | Tag order, CMP, non-prod |
| [07-credit-governance.md](07-credit-governance.md) | Budgets, alerts, meters |
| [08-data-cloud-cost-optimization.md](08-data-cloud-cost-optimization.md) | Batch vs streaming, IDR, activations |
| [09-vector-search-optional.md](09-vector-search-optional.md) | Data Cloud Vector Search vs external DB |
| [examples/pwa-kit-config-data-cloud.example.cjs](examples/pwa-kit-config-data-cloud.example.cjs) | Sample `dataCloudAPI` block for PWA Kit config |
| **[components/](components/)** | **Buildable code:** PWA Kit Data Cloud config merge, SPA `dataLayer` hook, GTM helpers — see [components/README.md](components/README.md) |
| **[sample-data-cloud/](sample-data-cloud/)** | **Sample Data Cloud configs:** objects/use cases, engagement events, B2C streams, identity, segments, activations — see [sample-data-cloud/README.md](sample-data-cloud/README.md) |

Validate all Salesforce-specific limits and SKUs with your account executive; this repo does not contain your order form.

## Build

- **Copy** `components/pwa-kit/` and `components/gtm/` into your PWA Kit project’s `app/` or `overrides/` tree (or publish an internal package).
- **Environment:** set `DATA_CLOUD_TENANT_ID` and `DATA_CLOUD_APP_SOURCE_ID` on Managed Runtime; see `components/pwa-kit/pwa-kit-env.example`.
- **Optional:** from `FreeInsider/`, run `npm run validate:env` in CI when `DATA_CLOUD_ENABLED=true`.

## Tests

Requires **Node.js 18+** (built-in `node:test` runner).

```bash
cd FreeInsider && npm test
```

See [test/freeinsider.test.mjs](test/freeinsider.test.mjs) for `mergeDataCloudConfig`, `validateEnv`, and `pushEcommerceEvent` coverage.

## GitHub

This directory is a **standalone Git repository**. To publish it as a new GitHub project, follow [PUBLISH.md](PUBLISH.md).
