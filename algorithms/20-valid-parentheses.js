

/**
 * Problem: https://leetcode.com/problems/valid-parentheses/
 * Difficulty: Easy
 * @param {string} s
 * @return {boolean}
 */

const isValid = (s) => {
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(')');
        break;
      case '{':
        stack.push('}');
        break;
      case '[':
        stack.push(']');
        break;
      default:
        if (s.length === 0 || stack.pop() !== s[i])
          return false;
        break;
    }
  }
  return stack.length === 0;
};