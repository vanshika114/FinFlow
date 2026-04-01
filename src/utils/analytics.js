/**
 * FinFlow — Analytics Engine
 * Spending trend calculations, forecasting, and health score computation.
 */

/**
 * Calculate total spend by category for a given transaction list.
 */
export function spendByCategory(transactions) {
  return transactions
    .filter((t) => t.type === "debit")
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});
}

/**
 * Forecast end-of-month spend based on current daily velocity.
 * @param {number} spentSoFar - Amount spent so far this month
 * @param {number} dayOfMonth - Current day (1-31)
 * @returns {number} Projected month-end total
 */
export function forecastMonthEnd(spentSoFar, dayOfMonth = new Date().getDate()) {
  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();
  const dailyRate = spentSoFar / dayOfMonth;
  return Math.round(dailyRate * daysInMonth);
}

/**
 * Calculate financial health score (0-100) from user data.
 */
export function calculateHealthScore({ savingsRate, budgetAdherence, debtRatio, investmentActivity, emergencyFundPct }) {
  const weights = { savingsRate: 0.25, budgetAdherence: 0.25, debtRatio: 0.2, investmentActivity: 0.15, emergencyFundPct: 0.15 };
  const score =
    savingsRate * weights.savingsRate +
    budgetAdherence * weights.budgetAdherence +
    debtRatio * weights.debtRatio +
    investmentActivity * weights.investmentActivity +
    emergencyFundPct * weights.emergencyFundPct;
  return Math.round(score);
}

/**
 * Detect subscriptions that haven't been used recently.
 * @param {Array} subscriptions
 * @param {number} inactiveDays - Threshold for "unused"
 */
export function detectGhostSubscriptions(subscriptions, inactiveDays = 14) {
  return subscriptions.filter((s) => !s.isUsed);
}

/**
 * Calculate month-over-month spending change as a percentage.
 */
export function momChange(current, previous) {
  if (!previous) return 0;
  return (((current - previous) / previous) * 100).toFixed(1);
}

/**
 * Auto-categorize a transaction by merchant name.
 */
export function autoCategory(merchantName) {
  const name = merchantName.toLowerCase();
  if (["swiggy", "zomato", "uber eats", "dominos"].some((k) => name.includes(k))) return "Food";
  if (["netflix", "spotify", "hotstar", "prime", "youtube"].some((k) => name.includes(k))) return "Subscription";
  if (["zepto", "blinkit", "bigbasket", "dmart"].some((k) => name.includes(k))) return "Groceries";
  if (["ola", "uber", "rapido", "indigo", "air india"].some((k) => name.includes(k))) return "Travel";
  if (["gym", "cult", "healthkart", "pharmacy"].some((k) => name.includes(k))) return "Health";
  if (["steam", "pubg", "bookmyshow", "pvr"].some((k) => name.includes(k))) return "Entertainment";
  if (["udemy", "coursera", "unacademy"].some((k) => name.includes(k))) return "Education";
  if (["salary", "freelance", "payment received"].some((k) => name.includes(k))) return "Income";
  return "Other";
}
