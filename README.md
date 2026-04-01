# 💸 FinFlow — AI-Powered Personal Finance Bodyguard

<div align="center">

![FinFlow Banner](docs/banner.png)

[![Hackathon](https://img.shields.io/badge/Protex%20Hackathon-2026-7c5cfc?style=for-the-badge)](https://protex.dev)
[![Track](https://img.shields.io/badge/Track-Personal%20Finance%20%26%20Wealth-22d3ee?style=for-the-badge)]()
[![Gen Z](https://img.shields.io/badge/Built%20For-Gen%20Z-f472b6?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-34d399?style=for-the-badge)](LICENSE)

**From passive tracking to active behavioral coaching. Think Noom, but for spending.**

[🚀 Live Demo](https://your-username.github.io/finflow) · [📽️ Demo Video](#) · [📊 Pitch Deck](docs/PROTEX_Financial_Bodyguard.pdf)

</div>

---

## 🎯 The Problem

83% of Gen Z demand digital-first financial guidance — but current tools are rearview mirrors. They only report the damage **after** it's done.

| Problem | Reality |
|---|---|
| 🛒 Doom Spending Epidemic | Impulse spending driven by economic anxiety, zero guardrails |
| 🧠 Subscription Fatigue | Ghost expenses bleeding accounts dry across scattered platforms |
| 📉 The Intelligence Gap | Passive tracking audits your past, never protects your future |

---

## ⚡ The Solution — FinFlow

FinFlow is an **Agentic Financial Bodyguard** — a proactive AI copilot that intercepts bad financial decisions in real time.

```
Impulse Trigger → AI Intercept → Wealth Retained
```

---

## 🧠 Core Features

### 1. 🤖 AI Financial Copilot
Conversational chat interface that answers personal finance queries in plain language, with context-aware insights grounded in the user's own transaction data — not generic advice.

### 2. 💳 Smart Expense Tracking
Add and view transactions with auto-categorization across Food, Travel, Subscriptions, Health, Entertainment, and more. Weekly and monthly analytics built in.

### 3. 🔍 Behavioral Insights Engine
Detects overspending trends, highlights unnecessary expenses, and generates specific, actionable suggestions before the damage compounds.

### 4. 👻 Subscription Exorcist
Scans for ghost subscriptions and underutilized recurring payments. One-click pause/cancel to eliminate financial fatigue.

### 5. 📊 AI Budget Planner
Generates dynamic budgets based on income and historical spending. Adapts to real behavior — not a static monthly spreadsheet.

### 6. 🎯 Goal-Based Savings
Users set financial goals in natural language. AI generates personalised saving plans with visual progress tracking.

### 7. 📈 Investment Starter Module
Beginner-friendly investment recommendations with risk profiling. Simulated portfolio dashboard with Nifty 50, Gold ETF, ELSS, and more.

### 8. 🔮 Predictive Analytics
Forecasts end-of-month spending and fires alerts before the user overshoots their budget — not after.

### 9. 🏆 Gamification Layer
Streaks, badges, and a Financial Health Score (0–100) that turns discipline into a rewarding daily habit.

### 10. ⚡ One-Click Optimize
Single action that cancels unused subs, sets up SIPs, and auto-transfers to savings — simultaneously.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────┐
│              THE INTERFACE                  │
│         React Native  ·  Next.js            │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│              THE PLUMBING                   │
│      FastAPI  ·  Python  ·  Kubernetes      │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│           INTELLIGENCE CORE                 │
│    LangGraph  ·  Llama-3  ·  pgvector       │
└──────────────────┬──────────────────────────┘
                   │
┌──────────────────▼──────────────────────────┐
│         DATA & API INFRASTRUCTURE           │
│   Sahamati AA  ·  Razorpay  ·  PostgreSQL   │
└─────────────────────────────────────────────┘
```

**Key engineering decisions:**
- **Agentic RAG pipeline** (pgvector) grounds all AI outputs in verified personal transaction data — eliminating hallucination risk
- **Sahamati AA Sandbox** simulates secure, standardised ReBIT JSON bank data flows
- **Zero-Click Discovery** — AI parses 90 days of statements on connect to auto-generate behavioural guardrails instantly

---

## 📁 Project Structure

```
finflow/
├── public/
│   └── index.html          # Standalone demo — open in any browser
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AICopilot.jsx
│   │   ├── Transactions.jsx
│   │   ├── Budget.jsx
│   │   ├── Goals.jsx
│   │   ├── Subscriptions.jsx
│   │   ├── Investments.jsx
│   │   ├── HealthScore.jsx
│   │   └── Rewards.jsx
│   ├── pages/
│   │   └── App.jsx
│   ├── data/
│   │   └── mockData.js     # Realistic demo dataset
│   ├── utils/
│   │   ├── aiEngine.js     # AI response logic
│   │   ├── categories.js   # Auto-categorization rules
│   │   └── analytics.js    # Spending trend calculations
│   └── assets/
│       └── styles/
├── docs/
│   ├── PROTEX_Financial_Bodyguard.pdf
│   ├── architecture.md
│   └── api-reference.md
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start

### Option 1 — Instant Demo (No Install)
```bash
# Just open this in your browser
open public/index.html
```

### Option 2 — Full Dev Setup
```bash
# Clone the repo
git clone https://github.com/your-username/finflow.git
cd finflow

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your API keys to .env

# Start development server
npm run dev
```

### Option 3 — Docker
```bash
docker compose up --build
# App available at http://localhost:3000
```

---

## 🔑 Environment Variables

```env
# AI
ANTHROPIC_API_KEY=your_key_here
LLAMA_ENDPOINT=http://localhost:11434

# Banking (Sahamati AA Sandbox)
AA_CLIENT_ID=your_client_id
AA_CLIENT_SECRET=your_secret
AA_SANDBOX_URL=https://sandbox.sahamati.org.in

# Payments
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/finflow
```

---

## 📡 API Reference

| Endpoint | Method | Description |
|---|---|---|
| `/api/transactions` | GET | Fetch all transactions |
| `/api/transactions` | POST | Add new transaction |
| `/api/insights` | GET | AI behavioural insights |
| `/api/budget/generate` | POST | Generate AI budget |
| `/api/subscriptions` | GET | List active subscriptions |
| `/api/subscriptions/:id/cancel` | DELETE | Cancel subscription |
| `/api/goals` | GET / POST | Manage savings goals |
| `/api/chat` | POST | AI copilot message |
| `/api/health-score` | GET | Financial health score |
| `/api/optimize` | POST | One-click optimise |

---

## 🗺️ Roadmap

| Phase | Timeline | Milestone |
|---|---|---|
| ✅ **Phase 0** | Hackathon | Prototype — all core features, demo-ready |
| 🔄 **Phase 1** | 0–6 months | Live Sahamati AA integration, all major Indian banks |
| 🔮 **Phase 2** | 6–12 months | WhatsApp AI agent for 20M+ gig economy workers |
| 🚀 **Phase 3** | Year 2+ | Autonomous wealth management & portfolio rebalancing |

**Target: 10M+ Gen Z users empowered.**

---

## 🛡️ Engineering Challenges Solved

| Challenge | Solution |
|---|---|
| AI hallucinations in financial advice | Agentic RAG pipeline — outputs grounded in verified transaction data only |
| Sourcing live bank data safely | Sahamati AA Sandbox with standardised ReBIT JSON flows |
| Gen Z onboarding friction | Zero-Click Discovery — 90-day auto-analysis on first connect |

---

## 👥 Team

Built with ❤️ at **Protex Hackathon 2026** — Personal Finance & Wealth track.

---

## 📄 License

MIT © 2026 FinFlow Team
