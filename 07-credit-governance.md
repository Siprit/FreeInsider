# 07 — Credit and send governance

Salesforce bills **separate meters**. Set a **monthly budget** per meter and review usage weekly after launch.

## Meters to track

| Meter | Where to monitor | Alert thresholds (example) |
|-------|------------------|------------------------------|
| **Data Cloud credits** | Data Cloud usage / billing reports in org | 70% / 85% / 100% of monthly budget |
| **MCP Personalization Credits** | MCP usage / account team reports | Same |
| **MCE sends** | Marketing Cloud usage | Same |
| **Einstein Requests** (if generative features used) | Einstein usage dashboards | Same |
| **Vector / embeddings** (if enabled) | Data Cloud AI / vector usage | Same |

## Operational rules

- Assign **cost center** or **project tags** to major segments and journeys for chargeback.
- **Quarterly review:** unused segments, duplicate activations, oversized identity rules.
- **Escalation:** when any meter crosses 85%, freeze new non-critical campaigns until the next planning cycle.

## Documentation

- Maintain a one-page **monthly actuals vs budget** spreadsheet owned by RevOps or platform ops.
