/**
 * Problem: https://leetcode.com/problems/length-of-last-word/
 * Difficulty: Easy
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  return s.trim().split(' ').at(-1).length;
};