# 08 — Data Cloud cost optimization

Directional guidance—confirm against your **order form** and org usage reports.

## Ingestion

- Prefer **batch** for large backfills and scheduled catalog/order loads.
- Use **streaming** only for events that must drive **near–real-time** segments (credits are typically higher per thousand records for streaming).

## Identity resolution

- Largest credit driver in many orgs after raw volume.
- Start with **fewer rules** and **stable identifiers** (customer ID, loyalty ID).
- Avoid unnecessary **scheduled** reconciliation frequency until baselines exist.

## Calculated insights

- Ship a **small** set of high-value insights; expand after measuring refresh cost.
- Do not duplicate metrics already available from **Commerce** or **MCP** reporting.

## Activations

- Activate **lean** audiences; use journey **filters** instead of activating overly broad populations.
- Prefer **delta** or incremental patterns where the product supports them.

## Sandbox and non-prod

- Run integration and load tests in **sandbox** where Salesforce documents lower Data Cloud credit consumption vs production—still avoid pointless production-scale replays.

## Salesforce-app ingestion

- If your contract includes **no charge** for ingesting structured data from certain Salesforce clouds, route CRM/commerce facts through that path to avoid paying twice—**verify with your AE**.

## Licensing

- Compare **consumption** vs **profile-based** or **flex** SKUs with your AE if monthly variance is a problem.
