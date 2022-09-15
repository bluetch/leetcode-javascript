/**
 * Problem: https://leetcode.com/problems/intersection-of-two-arrays/
 * Difficulty: Easy
 * Solution: https://ithelp.ithome.com.tw/articles/10267938
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 const intersectionOld = function(nums1, nums2) {
  // Using hashmap
  const arr = [];
  const hashMap = {};
  
  for (let i = 0; i < nums1.length; i++) {
    if (!hashMap[nums1[i]])
    hashMap[nums1[i]] = 1;
  }
  
  for (let j = 0; j < nums2.length; j++) {
    if (hashMap[nums2[j]] && hashMap[nums2[j]] == 1) {
      hashMap[nums2[j]]++;
      arr.push(nums2[j]);
    }
  }
  
  return arr;
};

const intersectionMap = (nums1, nums2) => {
  // ES6
  let memo = new Map();
  let arr = [];
  
  for (let i = 0; i < nums1.length; i++) {
      memo[nums1[i]] = true;
  }
  
  for (let i = 0; i < nums2.length; i++) {
      const n2 = nums2[i];
      if (memo[n2]) {
          arr.push(n2);
          memo[n2] = false;
      }
  }
  console.log(arr);
  return arr;
  
};

intersectionMap([1,2,2,1], [2,2]);