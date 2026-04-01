/**
 * FinFlow — AI Engine
 * Handles intent detection and response generation for the AI Copilot.
 * In production, this routes to LangGraph + Llama-3 via FastAPI.
 * For demo, responses are grounded in the user's mock transaction data.
 */

import { transactions, budgetCategories, subscriptions, savingsGoals } from "../data/mockData.js";

// ── Intent Classification ────────────────────────────────────────────────────

const intents = {
  OVERSPENDING:   ["overspend", "spending too much", "where", "going over", "budget"],
  SAVINGS:        ["save", "saving", "put aside", "cut down", "reduce"],
  INVESTMENT:     ["invest", "sip", "mutual fund", "stock", "gold", "portfolio", "returns"],
  SUBSCRIPTION:   ["subscription", "netflix", "spotify", "cancel", "recurring", "ghost"],
  BUDGET:         ["budget", "plan", "allocate", "set a budget", "how much"],
  HEALTH:         ["score", "health", "rating", "improve", "rank"],
  GOAL:           ["goal", "target", "saving for", "japan", "macbook", "emergency"],
};

function classifyIntent(message) {
  const lower = message.toLowerCase();
  for (const [intent, keywords] of Object.entries(intents)) {
    if (keywords.some((kw) => lower.includes(kw))) return intent;
  }
  return "GENERAL";
}

// ── Response Generator ───────────────────────────────────────────────────────

const responses = {
  OVERSPENDING: () => {
    const over = budgetCategories.filter((c) => c.spent > c.budget);
    const lines = over.map((c) => `${c.icon} **${c.category}** — ₹${c.spent.toLocaleString()} spent vs ₹${c.budget.toLocaleString()} budget (${Math.round(((c.spent - c.budget) / c.budget) * 100)}% over)`).join("\n");
    return `Here's where you're going over this month:\n\n${lines}\n\n**Top fix:** Cancel your 3 unused subscriptions → saves ₹2,948/month immediately. Want me to do that now?`;
  },

  SAVINGS: () =>
    `Based on your ₹53,000 income, here are 4 high-impact moves:\n\n1. **Cancel unused subs** (Hotstar, Notion, LinkedIn) → +₹2,948/month\n2. **Reduce food delivery to 3x/week** → +₹2,000/month\n3. **Auto-SIP ₹5,000** into Nifty 50 Index Fund\n4. **Round-up savings** on every purchase\n\nDoing all 4 = **₹9,948 extra saved per month** — that's ₹1.19L/year. 🚀`,

  INVESTMENT: () =>
    `For your moderate risk profile, here are 3 beginner-friendly options:\n\n📦 **Nifty 50 Index Fund** — ₹2,000 SIP/month · 12.4% avg CAGR · Low cost\n💛 **Digital Gold** — ₹500-1,000/month · Inflation hedge\n🏢 **ELSS Fund** — Saves tax under 80C · 14.2% avg CAGR · 3yr lock-in\n\n**Rule of thumb:** Invest 20% of income = ₹10,600/month for you. Start with ₹2,000 — the habit matters more than the amount.`,

  SUBSCRIPTION: () => {
    const unused = subscriptions.filter((s) => !s.isUsed);
    const waste = unused.reduce((a, s) => a + s.amount, 0);
    const names = unused.map((s) => `${s.emoji} **${s.name}** — ₹${s.amount}/month`).join("\n");
    return `You have **${unused.length} unused subscriptions** costing ₹${waste.toLocaleString()}/month:\n\n${names}\n\nCancelling all 3 saves **₹${(waste * 12).toLocaleString()}/year**. Want me to cancel them?`;
  },

  BUDGET: () =>
    `Based on your spending patterns and ₹53,000 income, here's your AI-generated budget:\n\n🍕 Food: ₹5,000 · 🛒 Groceries: ₹4,000 · 🏠 Rent: ₹15,000\n🎵 Subs: ₹1,200 · ✈️ Transport: ₹3,000 · 🏥 Health: ₹2,000\n🎮 Entertainment: ₹2,000 · 📦 Investments: ₹10,600 · 💰 Savings: ₹5,000\n\nThis follows the **50/30/20 rule** adjusted for your lifestyle. Apply it?`,

  HEALTH: () =>
    `Your current Financial Health Score is **78/100 — Good Standing** 🏆\n\nBreakdown:\n- Savings Rate: 82/100\n- Budget Adherence: 72/100\n- Debt Ratio: 90/100\n- Investment Activity: 68/100\n- Emergency Fund: 74/100\n\nTo hit 90+: start investing consistently and cancel those unused subs.`,

  GOAL: () => {
    const g = savingsGoals[0];
    const pct = Math.round((g.current / g.target) * 100);
    return `Your top goal is **${g.name}** — you're at ${pct}% (₹${g.current.toLocaleString()} of ₹${g.target.toLocaleString()}).\n\nAt your current pace you'll hit it in ~4 months. Saving an extra ₹2,000/month gets you there in **2.5 months**. Want me to adjust your budget to accelerate this?`;
  },

  GENERAL: () =>
    `Based on your profile, here's a quick snapshot:\n\n💸 Spent **₹38,240** this month (↓9% vs last month)\n⚠️ Food delivery is 36% over budget\n🎯 Emergency fund is 74% complete\n📈 Portfolio is up **+9.7%** this year\n\nWhat would you like to dig into — spending, saving, investing, or subscriptions?`,
};

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Generate an AI response for a given user message.
 * @param {string} message - User's natural language query
 * @returns {Promise<string>} - AI response text
 */
export async function generateResponse(message) {
  // Simulate network latency (replace with real API call in production)
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));
  const intent = classifyIntent(message);
  return responses[intent]?.() ?? responses.GENERAL();
}

export { classifyIntent };
