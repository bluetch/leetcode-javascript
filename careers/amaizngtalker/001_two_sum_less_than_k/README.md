# Two Sum Less Than K

## Assessments

Given an array `A` of integers and integer `K`. Any interger pair in `A` could be combined as a set. Find and return all combinations of sets where the sum `S` of elements is the maximum but less than `K` ( a, b are in A and a + b = S < K and S is maximum, return [a, b] ).
The answer must exclude duplicates, but it's fine in any order. e.g. [1, 2] or [2, 1] may be treated as the same, no need to return twice in one output. Please answer the time complexity of your program, too.

給定一個整數陣列 A 與一個整數 K，陣列 A 任兩個數字可以視為一個組合，找出並回傳所有組合當中的和 S 為最大但必須小於 K ( A 包含 a, b 且 a + b = S < K 且 S 為最大，回傳 [a, b])。
回傳的答案必須要排除重複的可能性，但是順序不拘（好比 `[1, 2]` 與 `[2, 1]` 視為一樣的答案，在一個回答當中無需回傳兩次）。也請回答你的程式的時間複雜度。

Example 1:

```
Input: A = [1, 2, 3, 4]. K = 4
Output: [[1, 2]], because 1+2 = 3 < 4
```

Example 2:

```
Input: A = [1, 2, 3]. K = 3
Output: []
```

Example 3:

```
Input: A = [1, 2, 2, 3, 4]. K = 5
Output: [[1, 3], [2, 2]], because both `1+3` and `2+2` are 4 < 5
```
