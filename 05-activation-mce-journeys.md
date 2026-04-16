# 05 — Activation: Data Cloud → Marketing Cloud Engagement

## Flow

1. Build **segments** in Data Cloud (and optional calculated insights).
2. **Activate** segment membership to **Marketing Cloud Engagement** (Shared Data Extensions or journey entry source supported by your integration).
3. In **Journey Builder**, use activated audiences for email, SMS, and **MobilePush** (native app).

## Channel notes

| Channel | Role in this architecture |
|---------|---------------------------|
| **Email** | Abandon cart/browse, win-back, post-purchase |
| **SMS** | High-intent, consent-based flows |
| **MobilePush** | Native **iOS/Android** apps via MCE MobilePush—not browser web push |
| **Browser web push** | **Gap vs Insider** — use email/SMS, native push, or a **partner/AppExchange** solution activated from the same segments |

## Lean activation

- Activate **sharp** segments; use journey **entry filters** and **suppression** to avoid full-table refreshes.
- Apply **frequency caps** and **global unsubscribes** per policy.

## Documentation for stakeholders

Record in your runbook:

- **Web push:** “MCE MobilePush = native app; browser web push requires partner or alternative channel.”
- **Data retention** and **consent** source for each journey.

## References

- Trailhead and Help: Data Cloud–driven interactions with Marketing Cloud (search current module titles in your org’s release).
