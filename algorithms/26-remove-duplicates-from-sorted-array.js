/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 * Difficulty: Easy
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = (nums) => {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};