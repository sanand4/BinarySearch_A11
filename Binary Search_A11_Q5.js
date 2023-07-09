function intersection(nums1, nums2) {
  const set = new Set();
  const result = [];

  // Add unique elements from nums1 to the set
  for (const num of nums1) {
    set.add(num);
  }

  // Check if each element in nums2 is in the set
  for (const num of nums2) {
    if (set.has(num)) {
      result.push(num);
      set.delete(num); // Remove the element from the set to avoid duplicates
    }
  }

  return result;
}
// Example 1
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2)); // Output: [2]

// Example 2
const nums3 = [4, 9, 5];
const nums4 = [9, 4, 9, 8, 4];
console.log(intersection(nums3, nums4)); // Output: [9, 4]
