

/**
 * Problem: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * Difficulty: Medium
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let left = 0, right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);
    if (nums[middle] > nums[right]) left = middle + 1;
    else right = middle;
  }
  const rt = left;
  left = 0, right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const rm = (middle + rt) % nums.length;
    if (nums[rm] == target) return rm;
    if (nums[rm] < target) left = middle + 1;
    else right = middle - 1;
  }

  return -1;
};

// Easy solution

// var search = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };