var coinChange = function(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity); // Create a dp array to store the minimum number of coins needed for each amount
  dp[0] = 0; // Base case: 0 coins needed for amount 0

  // Iterate through all amounts from 1 to the target amount

  // Iterate through all coin denominations

  // If the coin denomination is less than or equal to the current amount

  // Update the minimum number of coins needed for the current amount

  // Return the minimum number of coinsi needed for the target amount, or -1 if it is not possible
};