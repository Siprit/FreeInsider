# 09 — Vector search (optional, Phase 2+)

## When to use

- **Semantic** discovery (“find by meaning”), long-form **content** or **education** discovery, **RAG** over PDFs/HTML.
- **Not** the default for Insider-style **behavioral** product recommendations—use **Einstein Recommendations + MCP** first.

## Salesforce-native option

- **Data Cloud Vector Search** (vector database within Data Cloud): embeddings and search index on top of **Data Model Objects**—see Salesforce product help and [Data Cloud vector database announcement](https://www.salesforce.com/news/stories/data-cloud-vector-database-availability/).

## Cost

- Embedding generation, indexing, and queries typically add **Data Cloud** and/or **AI** usage—model **TCO** with your AE; treat as **Phase 2** after baselines are stable.

## External vector databases

- **Avoid** Pinecone, Weaviate, OpenSearch k-NN, etc., unless data **cannot** land in Data Cloud or you have a proven gap—adds sync, security, and duplicate cost.

## PWA Kit integration

- Expose semantic results via a **BFF or API** that calls Data Cloud retrieval—**never** embed raw credentials in the browser.
- Apply **caching** (short TTL) and **rate limits** on hot queries.

## Decision checklist

- [ ] Use case cannot be met by Einstein + MCP + good site search?
- [ ] Content is ingested or can be ingested into Data Cloud?
- [ ] Budget approved for embeddings + query volume?
- [ ] API path designed (BFF, auth, SLAs)?
