function missingNumber(nums) {
  const n = nums.length;
  let missingNum = n;

  for (let i = 0; i < n; i++) {
    missingNum ^= i ^ nums[i];
  }

  return missingNum;
}
// Example 1
const nums1 = [3, 0, 1];
console.log(missingNumber(nums1)); // Output: 2

// Example 2
const nums2 = [0, 1];
console.log(missingNumber(nums2)); // Output: 2

// Example 3
const nums3 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums3)); // Output: 8
