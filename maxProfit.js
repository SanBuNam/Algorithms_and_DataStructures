const maxProfit = (prices) => {
  let minPrice = Infinity; // Initialize the minimum price to infinity
  let maxPrice = 0; // Initialize the maximum profit to 0

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) { // If the current price is less than the minimum price
      minPrice = prices[i]; // Update the minimum price
    } else if (prices[i] - minPrice > maxPrice) { // If the difference between the current price and the minimum price is greater than the maximum profit
      maxPrice = prices[i] - minPrice; // update the maximum profit
    }
  }
  
  return maxPrice; // Return the maximum profit
}