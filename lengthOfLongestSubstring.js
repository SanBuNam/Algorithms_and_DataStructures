var lengthOfLongestSubstring = function(s) {
  let left = 0, right = 0;
const charIndexMap = new Map();
let maxLen = 0;

while (right < s.length) {
const currChar = s.charAt(right);
if (charIndexMap.has(currChar) && charIndexMap.get(currChar) >= left) {
  left = charIndexMap.get(currChar) + 1;
}
charIndexMap.set(currChar, right);
maxLen = Math.max(maxLen, right - left + 1);
right++;
}

return maxLen;
};
