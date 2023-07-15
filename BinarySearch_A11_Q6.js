function findMinimum(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (nums[left] > nums[right]) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
}
const nums1 = [3, 4, 5, 1, 2];
console.log(findMinimum(nums1)); // Output: 1

const nums2 = [4, 5, 6, 7, 0, 1, 2];
console.log(findMinimum(nums2)); // Output: 0
