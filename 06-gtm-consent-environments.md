# 06 — GTM, consent (CMP), and environments

## Remove Insider

- Delete or disable all **Insider** tags, variables, and triggers in GTM.
- Remove Insider from **content security policy** allowlists if present.

## Add Salesforce tags

1. **Data Cloud** — script from Data Cloud Setup → **Website and Mobile App** (tenant/app source aligned with PWA Kit `dataCloudAPI`).
2. **MCP** — JavaScript integration from MCP (see `03`).

## Load order (recommended starting point)

1. **Consent / CMP** — load first or use default consent mode per vendor docs.
2. **MCP** — synchronous snippet on pages where ZeroFlicker applies; otherwise follow MCP guidance.
3. **Data Cloud** — often async after consent; confirm with performance testing (LCP, TBT).

Adjust per Core Web Vitals measurement on **real devices**.

## Consent management platform (CMP)

- Map **analytics**, **personalization**, and **strictly necessary** categories to which tags fire **before** vs **after** opt-in.
- Document which experiences degrade when personalization cookies are declined (legal + UX review).

## Environments

| Environment | GTM container | Data Cloud | MCP |
|-------------|---------------|------------|-----|
| Dev | Optional separate container or preview | Test tenant / sandbox | Staging tenant if available |
| Staging | Staging workspace | Non-prod app source | Staging |
| Production | Live container | Production tenant | Production |

- Never point production GTM to **sandbox** Data Cloud tenant IDs in client-facing property.
- Version GTM **workspaces** and keep a change log for beacon updates.

## Data layer (optional but recommended)

- Align `dataLayer` ecommerce events with PWA Kit navigation so **analytics**, **Data Cloud**, and **Einstein activities** stay consistent—avoid double-firing the same commerce action.
