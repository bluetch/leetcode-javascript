/**
 * Problem: https://leetcode.com/problems/fizz-buzz/
 * Difficulty: Easy
 * Solution: https://ithelp.ithome.com.tw/articles/10267938
 * @param {number} n
 * @return {string[]}
 */

const fizzBuzz = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0) {
      str += 'Fizz';
    }
    if (i % 5 === 0) {
      str += 'Buzz';
    }
    // 如果是空字串
    if (!str) {
      str = i + '';
    }
    arr.push(str);
  }
  console.log(arr);
  return arr;
};

// fizzBuzz(3);
// fizzBuzz(7);
// fizzBuzz(15);