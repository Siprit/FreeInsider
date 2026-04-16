# 01 — Entitlements and licensing checklist

Use this with your Salesforce account team before build. Check each item and record SKU / limit in your internal runbook.

## Required products (baseline architecture)

- [ ] **Salesforce Data Cloud** — unified profile, ingestion, segments, activations, optional Vector Search
- [ ] **Marketing Cloud Personalization (MCP)** — onsite rules, experiences, ZeroFlicker web beacon, recommendation recipes
- [ ] **Marketing Cloud Engagement (MCE)** — Journey Builder, email, SMS, MobilePush (native apps)
- [ ] **Einstein for Commerce / B2C Commerce** — Einstein Recommendations API and activities from PWA Kit
- [ ] **B2C Commerce** — OCAPI/SCAPI for storefront and catalog alignment with MCP

## Meters to confirm on the order form

- [ ] **Data Cloud credits** — unified pool; overage terms
- [ ] **MCP Personalization Credits** — monthly pool; tier for AI Objective-Based Recommendations if used
- [ ] **MCE** — contacts, sends, Super Messages, SMS add-ons
- [ ] **Einstein** — confirm whether **Einstein Requests** apply to your paths (classic recommendations vs generative)
- [ ] **Included Salesforce-app ingestion** — whether structured ingestion from Commerce / Core / MCE / MCP is included at no extra Data Cloud credit cost (contract-specific)

## Web push (browser) — expectation

| Channel | Salesforce OOTB |
|---------|-----------------|
| **Browser web push** | Not a first-class parallel to Insider; **MCE MobilePush** targets **native iOS/Android apps** |
| **Practical alternatives** | Email/SMS from Data Cloud–activated journeys; native app push; optional **AppExchange** or partner web-push fed by activations |

Document the chosen approach in your runbook so stakeholders do not assume parity with Insider web push without extra integration.

## Optional (Phase 2+)

- [ ] **Data Cloud Vector Search** — embeddings / search index; credit impact
- [ ] **Agentforce / generative** — defer for cost control unless required

## Sign-off

| Role | Name | Date |
|------|------|------|
| AE / Success | | |
| Architecture | | |
| Commerce owner | | |
