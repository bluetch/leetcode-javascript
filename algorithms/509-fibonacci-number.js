/**
 * Problem: https://leetcode.com/problems/fibonacci-number/
 * Difficulty: Easy
 * @param {number} n
 * @return {number}
 */

const fib = (n) => {
  if (n === 0) return 0;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(`The number: ${n} is ${arr[n]}`);
  return arr[n];
};