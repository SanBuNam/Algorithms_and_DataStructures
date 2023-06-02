var containsDuplicate = function(nums) {
  // create a set to store the seen elements
  const seen = new Set();
  
  for (let num of nums) {
    if (seen.has(num)) { // If the current element is already in the set, return true (duplicate found)
      return true;
    }
    seen.add(num); // Add the current element to the set
  }
  // No duplicate found
  return false;
};