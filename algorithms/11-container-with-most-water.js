/**
 * Problem: https://leetcode.com/problems/container-with-most-water/
 * Difficulty: Medium
 * @param {number[]} height
 * @return {number}
 */
 const maxArea = function (height) {
  let maxarea = 0;
  let i = 0,
      j = height.length - 1;
  while (i < j) {
      maxarea = Math.max(maxarea, Math.min(height[i], height[j]) * (j - i));
      if (height[i] < height[j])
          i++;
      else
          j--;
  }
  return maxarea;
};