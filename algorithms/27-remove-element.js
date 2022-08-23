/**
 * Problem: https://leetcode.com/problems/remove-element/
 * Difficulty: Easy
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

const removeElement = (nums, val) => {
  let k = 0;
  for(let j = 0; j < nums.length; j++){
    if(val != nums[j]){
      nums[k] = nums[j];
      k++;
    }
  }
  console.log(k)
  return k;
};