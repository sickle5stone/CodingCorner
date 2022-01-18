/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Infinity;
  let max = 0;
  let profit = 0;

  for (var i = 0; i < prices.length; i++) {
    if (min > prices[i]) {
      min = prices[i];
      max = prices[i];
      continue;
    }
    if (max < prices[i]) {
      max = prices[i];
    }
    profit = Math.max(prices[i] - min, profit);
  }
  return profit;
};
