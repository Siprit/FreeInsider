# 00 — Suggested implementation sequence

Follow this order to align with the architecture (cost-aware, PWA Kit).

1. **Data Cloud** — Stand up ingestion: engagement events from PWA Kit + **B2C Commerce Intelligence** streams; validate in Data Explorer; prefer **batch** first, add **streaming** only where needed (`02`, `08`).
2. **Identity + segments** — Minimal viable **identity resolution** and a **small** set of segments and calculated insights; expand after credit baseline (`02`, `08`).
3. **MCP** — Deploy beacon via **GTM**; migrate highest-value Insider campaigns; monitor **Personalization Credits** (`03`, `06`).
4. **Einstein** — Wire **Einstein Recommendations** (non-generative) + MCP recipes for discovery; defer generative/Agentforce until usage is controlled (`04`).
5. **Optional** — **Data Cloud Vector Search** only if semantic/RAG requirements exist (`09`).
6. **MCE** — Connect **activations** to Journey Builder with **frequency caps** (`05`).
7. **Web push** — Document **browser web push** gap vs **MCE MobilePush** (native app) and alternatives (`01`, `05`).
8. **Governance** — **Credit** budgets and alerts (`07`).

Cross-cutting: **GTM/CMP** (`06`), **credit optimization** (`08`), **vector** decision (`09`).
