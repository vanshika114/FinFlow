# FinFlow — Architecture Deep Dive

## System Overview

FinFlow is designed as a modular, agentic system where each layer has a single clear responsibility.

```
User Action
    │
    ▼
┌─────────────────────┐
│   React Frontend    │  ← Dashboard, Chat, Charts, Goals
│   (Next.js / PWA)   │
└────────┬────────────┘
         │ HTTPS / WebSocket
         ▼
┌─────────────────────┐
│   FastAPI Backend   │  ← Auth, Routing, Business Logic
│   (Kubernetes)      │
└────────┬────────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌───────┐ ┌──────────────────┐
│  DB   │ │  Intelligence    │
│Postgres│ │  Core (Agentic) │
│+pgvec │ │  LangGraph       │
└───────┘ │  Llama-3         │
          └──────────────────┘
                   │
         ┌─────────┴──────────┐
         │                    │
         ▼                    ▼
┌──────────────┐   ┌──────────────────┐
│ Sahamati AA  │   │    Razorpay      │
│ (Bank Data)  │   │ (Mandate/Sweeps) │
└──────────────┘   └──────────────────┘
```

## Key Design Decisions

### 1. Agentic RAG for Safe Financial Advice
Standard LLMs hallucinate — unacceptable in personal finance. All AI outputs are strictly grounded through a RAG pipeline: the model only reasons over verified transaction data stored in pgvector, never generic internet knowledge.

### 2. Sahamati Account Aggregator
India's AA framework provides consent-based, standardised (ReBIT JSON) access to bank data across all major institutions. The sandbox lets us simulate real data flows without touching real funds.

### 3. LangGraph for Multi-Step Reasoning
Complex queries like "Optimise my finances" require multiple reasoning steps: analyse spend → detect anomalies → rank savings opportunities → generate action plan. LangGraph orchestrates these steps as a directed graph of AI agents.

### 4. Zero-Click Discovery
On first connect, the system auto-parses 90 days of transaction history to generate personalised behavioural guardrails — no manual setup required.

## Data Flow: AI Chat Request

```
User types: "Where am I overspending?"
        │
        ▼
Intent Classification (FastAPI)
        │
        ▼
Retrieve user's transaction embeddings (pgvector semantic search)
        │
        ▼
LangGraph agent: analyse → compare vs budget → rank anomalies
        │
        ▼
Llama-3 generates natural language response grounded in data
        │
        ▼
Response streamed to UI with action buttons
```

## Scalability

- Stateless FastAPI pods on Kubernetes — horizontal scaling on demand
- pgvector indexes for sub-100ms semantic retrieval
- Redis cache for frequently accessed user summaries
- WebSocket for real-time spend alerts
