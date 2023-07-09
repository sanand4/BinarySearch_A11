function findDuplicate(nums) {
  let slow = nums[0];
  let fast = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Find the entrance to the cycle
  let pointer1 = nums[0];
  let pointer2 = slow;
  while (pointer1 !== pointer2) {
    pointer1 = nums[pointer1];
    pointer2 = nums[pointer2];
  }

  // Return the repeated number
  return pointer1;
}
// Example 1
const nums1 = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums1)); // Output: 2

// Example 2
const nums2 = [3, 1, 3, 4, 2];
console.log(findDuplicate(nums2)); // Output: 3
