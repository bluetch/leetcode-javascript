/**
 * Problem: https://leetcode.com/problems/plus-one/
 * Difficulty: Easy
 * @param {number[]} digits
 * @return {number[]}
 */

const digits = [1, 2, 3];
const plusOne = (digits) => {
  console.log([...digits.join("")])
  const arr = [...(BigInt(digits.join("")) + BigInt(1)).toString()];
  console.log("arr", arr)
  console.log("arr map ", arr.map(Number))
  return arr.map(Number);
};

plusOne(digits);
// join() 方法用來將陣列的所有元素按指定的分隔符號合併成一個字串。
// Number() 可以用來將其他的資料型態轉型 (type conversion) 成數值型態。