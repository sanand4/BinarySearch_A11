function intersect(nums1, nums2) {
  const countMap1 = new Map();
  const countMap2 = new Map();

  // Populate countMap1 with counts of elements in nums1
  for (const num of nums1) {
    countMap1.set(num, (countMap1.get(num) || 0) + 1);
  }

  // Populate countMap2 with counts of elements in nums2
  for (const num of nums2) {
    countMap2.set(num, (countMap2.get(num) || 0) + 1);
  }

  const intersection = [];

  // Find the intersection of elements
  for (const [num, count1] of countMap1) {
    const count2 = countMap2.get(num);
    if (count2) {
      const minCount = Math.min(count1, count2);
      intersection.push(...Array(minCount).fill(num));
    }
  }

  return intersection;
}
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersect(nums1, nums2)); // Output: [2, 2]
