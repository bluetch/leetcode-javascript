

/**
 * Problem: https://leetcode.com/problems/3sum/
 * Difficulty: Medium
 * @param {number[]} nums
 * @return {number[][]}
 */

const threeSum = (nums) => {
  nums = nums.sort((a, b) => {
    return a - b;
  })
  let ans = [];

  if (nums.length < 3) return ans;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    let j = i + 1,
      k = nums.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;

        while ((j < k) && (nums[j] == nums[j - 1]))
          j++; // avoid duplicates
        while ((j < k) && (nums[j] == nums[k + 1]))
          k++; // avoid duplicates
      } else if (nums[i] + nums[j] + nums[k] > 0)
        k--;
      else
        j++;
    }
  }
  return ans;
};