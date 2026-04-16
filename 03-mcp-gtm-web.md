# 03 — Marketing Cloud Personalization: web + GTM

## Goals

- Replace **Insider** web tags with **MCP JavaScript beacon** (Interactions SDK / `SalesforceInteractions` or legacy `Evergage` global per your tenant version).
- Keep **one** real-time behavioral system for onsite experiences: **MCP** for rules, campaigns, and optional recommendation slots that are not served by Einstein alone.

## 1. Get integration code

1. MCP UI → **Channels & Campaigns** → **Web** → **JavaScript Integration** (or current navigation).
2. Choose **synchronous** integration where ZeroFlicker is required (recommended for visible hero/slot swaps).
3. Copy the snippet for **staging** and **production** separately if your tenant provides environment-specific endpoints.

## 2. Google Tag Manager

| Task | Notes |
|------|--------|
| Remove Insider tags | All Insider containers / custom HTML |
| Add MCP tag | Priority: synchronous load for personalization-critical pages if using sync mode |
| Add Data Cloud tag | Often async; align with performance policy (see `06`) |
| Version + publish | Staging workspace first; QA then production |

## 3. eCommerce / Commerce Cloud alignment

- Follow [eCommerce web integration](https://developer.salesforce.com/docs/marketing/personalization/guide/ecommerce.html) so product IDs, categories, and cart context match **B2C Commerce** catalog keys MCP expects.
- Map Insider **campaign types** to MCP **experiences / rules** (e.g. exit intent → MCP rule; category affinity → audience + experience).

## 4. Migration approach (Insider → MCP)

1. Inventory Insider campaigns: trigger, audience, frequency, creative.
2. Prioritize by revenue or traffic.
3. Recreate highest-value flows first in MCP; run parallel **A/B** if needed during cutover.
4. Deprecate duplicate recommendation carousels: prefer **Einstein** for product reco slots; use MCP for overlays, promos, and editorial tuning unless a slot is explicitly MCP-only.

## 5. Validation

- Browser console: presence of `window.SalesforceInteractions` or `window.Evergage` per [Validate JavaScript Beacon Deployment](https://developer.salesforce.com/docs/marketing/personalization/guide/validate-javascript-beacon-deployment.html).
- MCP reporting: impressions and clicks for new experiences.
- Monitor **Personalization Credits** usage after go-live.
