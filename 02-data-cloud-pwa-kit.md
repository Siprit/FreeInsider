# 02 — Data Cloud: PWA Kit engagement + B2C Intelligence

Storefront: **PWA Kit on Managed Runtime** only.

## 1. Website and Mobile App (engagement events)

1. In **Data Cloud Setup**, create the **Website and Mobile App** connection and copy:
   - **Tenant ID** (from tenant endpoint; string before first period in host)
   - **App source ID** (from integration script; path segment before `/scripts`)

2. Add these to your PWA Kit project configuration (`app` → `dataCloudAPI`). See [Integrate PWA Kit with Data Cloud](https://developer.salesforce.com/docs/commerce/b2c-commerce/guide/integrate-data-cloud.html) and [examples/pwa-kit-config-data-cloud.example.cjs](examples/pwa-kit-config-data-cloud.example.cjs).

3. Supported engagement-style events (verify in current docs for your release):

   - `ViewPage`
   - `ViewProduct`
   - `ViewCategory`
   - `ViewSearchResults`
   - `ViewRecommendations`

## 2. Validate ingestion

1. Open **Data Explorer** → select data space → **Data Model Object** → **Website Engagement** (or current equivalent label).
2. On a **test** storefront, run searches, PDP, category, recommendation views.
3. Refresh Data Explorer and confirm rows appear with expected timestamps.

## 3. B2C Commerce Intelligence Connector

- Stream **orders, catalog-aligned attributes, shopper/product context** into Data Cloud for segmentation beyond raw page events.
- Reference: [B2C Commerce Intelligence Connector](https://developer.salesforce.com/docs/data/data-cloud-int/guide/c360-a-b2ce-connector.html).
- Prefer **batch** schedules for large historical backfills; add **streaming** only where the use case requires near–real-time segments (credit-aware).

## 4. Identity resolution (minimal viable)

- Start with **high-confidence keys**: registered customer ID, loyalty ID, email (hashed per policy) where allowed.
- Avoid broad fuzzy keys on day one; expand only after measuring credit burn.
- Reconcile anonymous site behavior to known profiles on **login** and **order**.

## 5. Segments and calculated insights (starter set)

| Segment / insight | Example use |
|-------------------|-------------|
| High-intent browser | Multiple PDP views, no purchase in window |
| Cart abandoner | Cart add, no order |
| Category affinity | From engagement + order streams |
| Win-back | Lapsed purchasers |

Keep **calculated insights** to a small set until baselines exist; tighten refresh windows for cost control.

## 6. Activation targets

- **Marketing Cloud Engagement** — Shared Data Extensions / journey entry from Data Cloud segments.
- Confirm **activation** frequency and row counts against credit budget (see `07` and `08`).
- Sample mappings: [sample-data-cloud/activations/marketing-cloud-engagement.example.json](sample-data-cloud/activations/marketing-cloud-engagement.example.json).

## Reference samples (repo)

- [sample-data-cloud/README.md](sample-data-cloud/README.md) — engagement events, B2C Intelligence streams, identity rules, segments, calculated insights.
