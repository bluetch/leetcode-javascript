/**
 * Problem: https://leetcode.com/problems/fibonacci-number/
 * Difficulty: Easy
 * @param {number} n
 * @return {number}
 */

 // 用空間換取時間，加速後的時間複雜度：O(n)，算每一項的同時我們需要去讀取前兩項的值，並把它加起來，總共需要三個步驟。而我們總共需要算 n-1 次，所以總共的步驟數是 3(n-1) 次，只看最高次方項並拔掉係數後，我們就可以得到加速後的時間複雜度：O(n)。

const fib = (n) => {
  if (n === 0) return 0;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(`The number: ${n} is ${arr[n]}`);
  return arr[n];
};

// Solution: Recursion
// 時間複雜度：O(2^n)，代表著執行步驟會是 2 的 n 次方。實務上來說，這樣的執行效率非常的慢，例如當輸入為 100 時，執行步驟就會暴增到 30 位數，等於即使每秒都能執行 1 百億個步驟，也需要個天荒地老 1 千億年才能完成。因此，這樣的時間複雜度是大部分工程師在設計演算法時想要避免的。

function fib(n) {
  if (n == 0) return 0;
  if (n == 2 || n == 1) return 1;
  return fib(n-1) + fib(n-2);
}