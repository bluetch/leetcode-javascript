

/**
 * Problem: https://leetcode.com/problems/longest-common-prefix/
 * Difficulty: Easy
 * Solution 1: https://www.youtube.com/watch?v=BVQv4zvN51o
 * Solution 2: https://www.youtube.com/watch?v=NBrgHratVPE
 * Solution 3: https://www.youtube.com/watch?v=1vypqSzrGyw
 * Solution 4: https://www.youtube.com/watch?v=qdLc68w9X5c
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = (strs) => {
  if(strs.length === 0) return '';
  let prefix = strs[0];

  for(let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      // console.log("prefix: is currently ", prefix);
    }
  }
  
  return prefix;
};