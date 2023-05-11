var hammingWeight = function(n) {
  let count = 0; // Initialize a count variable to store the number of '1' bits
  
  while (n !== 0) { // Iterate until n becomes 0
      if (n & 1) { // Check if the least significant bit of n is '1'
          count++; // If so, increment the count
      }
      n = n >>> 1; // Right shift n by 1 to discard the least significant bit
  }
  
  return count; // Return the count of '1' bits
};