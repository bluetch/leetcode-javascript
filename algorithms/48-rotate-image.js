

/**
 * Problem: https://leetcode.com/problems/rotate-image/
 * Difficulty: Medium
 * Solution: https://samuel-yeh.medium.com/leetcode-with-javascript-48-rotate-image-5c8c62036f4e
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = (matrix) => {
  const n = matrix.length;
  // i 代表 row，j 代表 column。
  // 先把二維陣列中， matrix[i][j] & matrix[j][i] 的數值對調。(transpose： 轉置矩陣)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 再把每一個row，直接做 reverse。即可得
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};