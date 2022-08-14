

/**
 * Problem: https://leetcode.com/problems/roman-to-integer/
 * Difficulty: Easy
 * Solution 1: https://www.youtube.com/watch?v=nIIe1KvP4PU
 * @param {string[]} s
 * @return {number}
 */

const romanToInt = (s) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let sum = 0;
  let prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const curr = roman[s[i]];
    if (curr < prev) {
      sum -= curr;
    } else {
      sum += curr;
    }
    prev = curr;
  }
  return sum;
}

const romanToInt2 = (s) => {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let front = s[i], back = s[i + 1];
    if (obj[back] < obj[front]) {
      result -= obj[front];
    } else {
      result += obj[front];
    }
  }
  return result;
}