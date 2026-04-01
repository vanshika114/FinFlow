/**
 * FinFlow — Mock Dataset
 * Realistic Gen Z financial profile for demo purposes.
 * In production, this is replaced by live Sahamati AA data.
 */

export const demoUser = {
  id: "user_aryan_001",
  name: "Aryan Kumar",
  email: "aryan.k@example.com",
  age: 23,
  city: "Delhi",
  monthlyIncome: 53000,
  riskProfile: "moderate",
  joinedAt: "2024-01-15",
  streak: 23,
  flowPoints: 420,
  healthScore: 78,
};

export const transactions = [
  { id: "t1",  name: "Swiggy",           category: "Food",           amount: 480,   type: "debit",  date: "2026-07-04" },
  { id: "t2",  name: "Spotify Premium",  category: "Subscription",   amount: 119,   type: "debit",  date: "2026-07-03" },
  { id: "t3",  name: "Salary Credit",    category: "Income",         amount: 53000, type: "credit", date: "2026-07-01" },
  { id: "t4",  name: "Zepto Groceries",  category: "Groceries",      amount: 1240,  type: "debit",  date: "2026-07-02" },
  { id: "t5",  name: "IndiGo Flight",    category: "Travel",         amount: 4200,  type: "debit",  date: "2026-06-30" },
  { id: "t6",  name: "Amazon Prime",     category: "Subscription",   amount: 299,   type: "debit",  date: "2026-06-29" },
  { id: "t7",  name: "Zomato",           category: "Food",           amount: 620,   type: "debit",  date: "2026-06-28" },
  { id: "t8",  name: "Netflix",          category: "Subscription",   amount: 649,   type: "debit",  date: "2026-06-27" },
  { id: "t9",  name: "Freelance Project",category: "Income",         amount: 8000,  type: "credit", date: "2026-06-25" },
  { id: "t10", name: "Ola Cab",          category: "Travel",         amount: 340,   type: "debit",  date: "2026-06-24" },
  { id: "t11", name: "Gym Membership",   category: "Health",         amount: 1200,  type: "debit",  date: "2026-06-20" },
  { id: "t12", name: "PUBG UC",          category: "Entertainment",  amount: 800,   type: "debit",  date: "2026-06-18" },
  { id: "t13", name: "Swiggy",           category: "Food",           amount: 560,   type: "debit",  date: "2026-06-17" },
  { id: "t14", name: "MakeMyTrip",       category: "Travel",         amount: 1560,  type: "debit",  date: "2026-06-14" },
  { id: "t15", name: "Hotstar Premium",  category: "Subscription",   amount: 299,   type: "debit",  date: "2026-06-13" },
];

export const subscriptions = [
  { id: "s1", name: "Netflix",           amount: 649,  emoji: "🎬", renewsOn: "Jul 27", isUsed: true  },
  { id: "s2", name: "Spotify",           amount: 119,  emoji: "🎵", renewsOn: "Jul 30", isUsed: true  },
  { id: "s3", name: "Amazon Prime",      amount: 299,  emoji: "📦", renewsOn: "Jul 29", isUsed: true  },
  { id: "s4", name: "Hotstar",           amount: 299,  emoji: "📺", renewsOn: "Jul 15", isUsed: false },
  { id: "s5", name: "ChatGPT Plus",      amount: 1670, emoji: "🤖", renewsOn: "Jul 22", isUsed: true  },
  { id: "s6", name: "Notion Pro",        amount: 150,  emoji: "📝", renewsOn: "Jul 18", isUsed: false },
  { id: "s7", name: "LinkedIn Premium",  amount: 2499, emoji: "💼", renewsOn: "Jul 5",  isUsed: false },
  { id: "s8", name: "YouTube Premium",   amount: 189,  emoji: "▶️", renewsOn: "Jul 25", isUsed: true  },
];

export const budgetCategories = [
  { category: "Food & Dining",    budget: 5000,  spent: 6800,  icon: "🍕", color: "#f87171" },
  { category: "Groceries",        budget: 4000,  spent: 3200,  icon: "🛒", color: "#34d399" },
  { category: "Subscriptions",    budget: 1500,  spent: 2187,  icon: "🎵", color: "#fbbf24" },
  { category: "Transport",        budget: 3000,  spent: 2100,  icon: "✈️", color: "#22d3ee" },
  { category: "Health & Fitness", budget: 2000,  spent: 1200,  icon: "🏥", color: "#a78bfa" },
  { category: "Entertainment",    budget: 2500,  spent: 800,   icon: "🎮", color: "#f472b6" },
  { category: "Education",        budget: 2000,  spent: 0,     icon: "📚", color: "#fb923c" },
  { category: "Utilities",        budget: 3000,  spent: 2800,  icon: "💡", color: "#67e8f9" },
];

export const savingsGoals = [
  { id: "g1", name: "Emergency Fund", target: 100000, current: 74000, emoji: "🛡️", color: "#7c5cfc" },
  { id: "g2", name: "Japan Trip",     target: 150000, current: 42000, emoji: "🗾", color: "#22d3ee" },
  { id: "g3", name: "MacBook Pro",    target: 200000, current: 28000, emoji: "💻", color: "#f472b6" },
  { id: "g4", name: "Investment SIP", target: 50000,  current: 38000, emoji: "📈", color: "#34d399" },
];

export const portfolio = [
  { name: "Mutual Funds", value: 52000,  color: "#7c5cfc", growth: 14.2 },
  { name: "Stocks",       value: 28000,  color: "#22d3ee", growth: 8.6  },
  { name: "Gold ETF",     value: 15000,  color: "#34d399", growth: 8.1  },
  { name: "Fixed Deposit",value: 45000,  color: "#fbbf24", growth: 7.0  },
];

export const spendingHistory = [
  { month: "Feb", spending: 44200, savings: 8800  },
  { month: "Mar", spending: 41800, savings: 11200 },
  { month: "Apr", spending: 48300, savings: 4700  },
  { month: "May", spending: 42100, savings: 10900 },
  { month: "Jun", spending: 45600, savings: 7400  },
  { month: "Jul", spending: 38240, savings: 14800 },
];

export const healthScoreHistory = [
  { month: "Feb", score: 62 },
  { month: "Mar", score: 65 },
  { month: "Apr", score: 70 },
  { month: "May", score: 68 },
  { month: "Jun", score: 74 },
  { month: "Jul", score: 78 },
];

export const badges = [
  { id: "b1", icon: "🏅", name: "First Save",    description: "Saved for the first time",      earned: true  },
  { id: "b2", icon: "🔥", name: "7-Day Streak",  description: "7 days on budget",              earned: true  },
  { id: "b3", icon: "💰", name: "₹10K Saved",    description: "Saved ₹10,000 total",           earned: true  },
  { id: "b4", icon: "📊", name: "Budget Master",  description: "Under budget 2 months running", earned: true  },
  { id: "b5", icon: "🚀", name: "Investor",       description: "Made first investment",         earned: true  },
  { id: "b6", icon: "🎯", name: "Goal Setter",    description: "Set 3 financial goals",         earned: true  },
  { id: "b7", icon: "💎", name: "Iron Saver",     description: "30-day budget streak",          earned: false },
  { id: "b8", icon: "🦁", name: "Finance King",   description: "Health score above 90",         earned: false },
];

export const aiInsights = [
  {
    type: "danger",
    icon: "⚠️",
    message: "Your food delivery spend is ₹6,800 this month — 36% over budget. Cooking 2 meals/week saves ~₹2,000.",
  },
  {
    type: "warning",
    icon: "💡",
    message: "You haven't used Hotstar in 3 weeks. Pausing it saves ₹299/month instantly.",
  },
  {
    type: "success",
    icon: "✅",
    message: "You transferred ₹5,000 to savings 3 months in a row. Setting up an auto-SIP could lock this habit in.",
  },
  {
    type: "info",
    icon: "📉",
    message: "At current pace, you'll overspend by ₹3,100 before month end. Reduce weekend dining to stay on track.",
  },
];
