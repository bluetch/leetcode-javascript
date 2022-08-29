/**
 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * Difficulty: Medium
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let i = 0,
    j = 0,
    ans = 0,
    n = s.length;
  let subStr = '';
  while (i < n && j < n) {
    if (subStr.indexOf(s.charAt(j)) < 0) {
      subStr += s.charAt(j++);
      ans = Math.max(ans, j - i);
    } else {
      subStr = subStr.replace(s.charAt(i++), '');
    }
  }
  return ans;
};

// charAt 可以用來取得字串中特定位置的字元。

// var str = 'hello world';
// // 輸出 'e'
// console.log(str.charAt(1));


// Math 物件的 Math.max() 方法用來取得傳入所有傳入參數的最大值。
// Math.max(10, 20);   //  20


// Solution: sliding window
// 1. Eat: If food is new food, Eat
// 2. Diguest: Record the maxinum of food in the <body>
// 3. Check condition to poop:
//   if the food is MediaElementAudioSourceNode, poop till the eaten food come out