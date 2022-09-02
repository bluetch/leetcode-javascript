

/**
 * Problem: https://leetcode.com/problems/search-insert-position/
 * Difficulty: Easy
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchInsert = (nums, target) => {
  if (nums.length === 0 || nums[0] >= target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;
  for (var i = 0; i < nums.length - 1; i++) {
    if (target >= nums[i] && target <= nums[i + 1])
      return i + 1;
  }
};