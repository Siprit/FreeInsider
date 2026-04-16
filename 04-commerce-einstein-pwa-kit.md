# 04 — Commerce Cloud + PWA Kit: Einstein and scalability

## Primary recommendation engine

- Use **Einstein Recommendations** as the **primary** engine for PDP / PLP / cart / home carousels.
- Use **MCP** for **onsite messaging, urgency, promos, A/B shells**, and MCP-only recipes where editorial control requires it—**avoid duplicating** full Einstein carousels with MCP everywhere (credit and ops cost).

### References

- [Einstein Recommendations overview](https://developer.salesforce.com/docs/commerce/einstein-api/guide/einstein-recommendations-overview.html)
- [Einstein Activities usage](https://developer.salesforce.com/docs/commerce/einstein-api/guide/usage.html)
- [Einstein Activities for phased headless](https://developer.salesforce.com/docs/commerce/commerce-api/guide/einstein-activities-for-phased-headless-rollouts.html)
- [Personalize with Shopper Context](https://developer.salesforce.com/docs/commerce/commerce-api/guide/personalize-with-shopper-context.html)

## PWA Kit patterns

- Use **`useEinstein`** (or current equivalent) to send activities: `viewProduct`, `viewReco`, `clickReco`, cart and checkout steps as applicable.
- Fire activities on **SPA route changes**, not only initial load.

## Caching and scale

- Do **not** long-cache **HTML that embeds user-specific recommendation lists** on shared URLs.
- **SSR the shell**; load **recommendation slots client-side** or use very short TTL for personalized fragments.
- See [Performance tips](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/perf-tips.html) and [Maximize cache hit ratio](https://developer.salesforce.com/docs/commerce/pwa-kit-managed-runtime/guide/maximizing-your-cache-hit-ratio.html).

## API discipline

- Parallelize independent calls (`Promise.all`).
- One **getRecommendations** (or equivalent) per slot per view where possible.
- Avoid redundant **Shopper Context** calls—use only when **BFF/server** personalization cannot be done with client Einstein + SLAS.

## Slot mapping (example)

| Surface | Engine | Notes |
|---------|--------|--------|
| PDP “Similar items” | Einstein | Activities for view/click reco |
| PLP “Trending” | Einstein or MCP recipe | Prefer Einstein for catalog-scale |
| Cart cross-sell | Einstein | Align with basket context |
| Promo banner / urgency | MCP | Behavioral rules |

## Order-form validation

- Confirm **Einstein for Commerce** entitlement.
- Confirm **OCAPI/SCAPI** rate limits for peak; load-test **Einstein + MCP** together.
