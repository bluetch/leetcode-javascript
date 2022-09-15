/**
 * Problem: https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * Difficulty: Easy
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

// includes ES7
// const findDifference = (nums1, nums2) => {
//   let set1 = new Set(nums1.filter(num => !nums2.includes(num)))
//   let set2 = new Set(nums2.filter(num => !nums1.includes(num)));

//   return [[...set1], [...set2]];
// }

const findDifference = function (nums1, nums2) {
  nums1 = new Set(nums1);
  nums2 = new Set(nums2);
  const arr1 = [...nums1].filter(elem => !nums2.has(elem));
  const arr2 = [...nums2].filter(elem => !nums1.has(elem));
  return [arr1, arr2]
};