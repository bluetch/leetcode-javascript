
/**
 * Problem: https://leetcode.com/problems/longest-palindromic-substring
 * Difficulty: Medium
 * 
 * 
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const expandAroundCenter = (s, left, right) => {
    let L = left,
      R = right;
    while (L >= 0 && R < s.length && s.charAt(L) == s.charAt(R)) {
      L--;
      R++;
    }
    return parseInt(R - L - 1);
  }

  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    // console.log("i="+i, "len="+len,"start="+start, "end="+end);
    if (len > (end - start)) {
      start = parseInt(i - parseInt((len - 1) / 2));
      end = parseInt(i + len / 2);
    }
    // console.log("===================", "start="+start, "end="+end);
  }
  return s.substring(start, end + 1);
}