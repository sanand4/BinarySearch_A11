function searchRange(nums, target) {
  let left = -1;
  let right = -1;

  // Binary search for the leftmost occurrence
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) {
      left = middle;
      high = middle - 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  // Binary search for the rightmost occurrence
  low = 0;
  high = nums.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    if (nums[middle] === target) {
      right = middle;
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return [left, right];
}
const nums1 = [5, 7, 7, 8, 8, 10];
const target1 = 8;
console.log(searchRange(nums1, target1)); // Output: [3, 4]

const nums2 = [5, 7, 7, 8, 8, 10];
const target2 = 6;
console.log(searchRange(nums2, target2)); // Output: [-1, -1]
