/*
遞迴解(Recursion)
而遞回函式通常需要有兩項條件，一項是重複執行它自己，另一項則是跳出執行的出口，避免造成無窮迴圈。
Time complexity = O(2^n)
*/
const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(10);
// 55
fibonacci(6);
// 8

/*
迴圈解
Time Complexity = O(n)
*/
function fibonacci2(n) {
  if (n === 0) return 0;
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(`The number: ${n} is ${arr[n]}`);
  return arr[n];
}

fibonacci2(10)
// 55
fibonacci2(6)
// 8
