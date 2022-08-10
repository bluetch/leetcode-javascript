

/**
 * Problem: https://leetcode.com/problems/palindrome-number/submissions/
 * Difficulty: Easy
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = (x) => {
  const solution = (x+"").split("").reverse().join("");
  if(solution > 2 ** 31 - 1) return 0;
  return (x == solution) ? true : false;
};