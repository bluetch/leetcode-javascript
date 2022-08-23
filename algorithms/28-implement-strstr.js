/**
 * Problem: https://leetcode.com/problems/implement-strstr/
 * Difficulty: Easy
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const strStr = (haystack, needle) => {
  // Solutuin 1
  // ==============================================
  // return haystack.indexOf(needle);

  // Solutuin 2
  // ==============================================
  if (!needle) return 0;
  if (!haystack || needle.length > haystack.length) return -1;

  var count = 0,
    i = 0,
    j = 0;
  while (i < haystack.length) {
    count++;
    if (haystack[i++] != needle[j++]) {
      j = 0;
      i = i - count + 1;
      count = 0;
    }
    if (j == needle.length) return i - count;
  }
  return -1;
};