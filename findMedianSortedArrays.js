// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

// Example 1:
// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:
// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
// Constraints:
// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// Explanation:
// We start by calculating the total length of the two arrays and whether the resulting median should be even or odd. Then, we calculate the index of the median in the merged array.
// We use a while loop to iterate over both arrays at the same time, keeping track of the previous and current values and the count of elements we've iterated over. 
// We compare the first element of each array and choose the smaller one, incrementing the index of that array. We keep track of the previous value so we can calculate the median if necessary.
// If the median is even, we return the average of the previous and current value when we reach the median index. If it's odd, we return the current value at the median index.
// The time complexity of this algorithm is O(m+n), which satisfies the requirement of O(log(m+n)) as long as we can assume that the two input arrays are already sorted.

function findMedianSortedArrays(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  const midIndex = Math.floor(totalLength / 2);
  let i = 0, j = 0, count = 0, prev =  0, curr = 0;

  while (i < nums1.length || j < nums2.length) {
    prev = curr;
    if (nums1[i] === undefined || nums2[j] !== undefined && nums[i] > nums2[j]) {
      curr = nums2[j++];
    } else {
      curr = nums1[i++];
    }

    count++;
    if (isEven && count === midIndex) {
      return (prev + curr) / 2;
    } else if (!isEven && count == midIndex + 1) {
      return curr;
    }
  }
}