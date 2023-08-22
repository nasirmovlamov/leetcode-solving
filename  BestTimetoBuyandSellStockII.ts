function maxProfit(prices: number[]): number {
  let money = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    const diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      money += diff;
    }
  }
  return money;
}

console.log(maxProfit([1, 7, 6, 4, 3, 1]));
