# Objects, streams, and use cases

Aligns with [02-data-cloud-pwa-kit.md](../02-data-cloud-pwa-kit.md). Replace *italic* placeholders with your org’s actual DMO/stream names from **Data Cloud**.

## Ingestion sources

| Source | Typical Data Cloud object / category | Primary use cases |
|--------|--------------------------------------|-------------------|
| **Website and Mobile App** (PWA Kit beacon) | *Website Engagement* (or equivalent engagement DMO) | Browse path, PDP/category/search views, recommendation exposure, anonymous → known stitching |
| **B2C Commerce Intelligence** | *Order*, *Order Line*, *Product*, *Customer/Profile* (per connector mapping) | Revenue, AOV, category affinity, cart abandoner (orders vs engagement), catalog-based segments |
| **Salesforce CRM** (optional) | *Contact*, *Lead*, *Account* | B2B touchpoints, sales-assisted journeys |
| **Marketing Cloud Engagement** (optional inbound) | Engagement sends, bounces | Suppression, cross-channel frequency |

## Identity resolution

| Match priority | Identifier examples | Use case |
|----------------|---------------------|----------|
| 1 | Commerce customer ID, loyalty member ID | Stable cross-session profile |
| 2 | Email (hashed per policy) | Login/checkout identity |
| 3 | Anonymous site ID + order email | Link browse to purchase |

## Segments (starter)

| Segment | Feeds | Notes |
|---------|--------|--------|
| High-intent browser | MCP onsite rules, MCE nurture | Multiple PDP views, no order in *N* days |
| Cart abandoner | Email/SMS journey | Cart add event, no completed order in *N* hours |
| Category affinity | Einstein/MCP context (via activation or API) | Derived from *ViewCategory* + orders |
| Win-back | MCE email | Last purchase older than *N* days, consent true |

## Activations

| Destination | Use case |
|-------------|----------|
| **Marketing Cloud Engagement** | Journey Builder entry (email, SMS, MobilePush) |
| **Marketing Cloud Personalization** (if licensed) | Audience or attribute sync for onsite experiences |

## Optional (Phase 2)

| Capability | Use case |
|------------|----------|
| **Data Cloud Vector Search** | Semantic content/product discovery, RAG |
