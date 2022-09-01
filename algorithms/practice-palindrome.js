/*
Write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.

EX:
  isPalindrome("awesome") false
  isPalindrome("foobar") false
  isPalindrome("tacocat") true
  isPalindrome("asdfopjaseiopfjwqepfma") false
*/

const palindrome = (str) => {
  let left = 0, right = str.length - 1;
  while (left <= right) {
    console.log(str[left], str[right]);
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      console.log(str + " is not palindrome");
      return false;
    }
  }
  console.log(str + " is palindrome");
  return true;
}