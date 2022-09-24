/*
Write a function that takes two strings and check if they have the same letters.
Order doesn't matter.

Ex:
  sameFrequency("abbc", "aabc") false
  sameFrequency("abba", "abab") true
  sameFrequency("aasdebasdf", "adfeebed") false
*/


const sameFrequency = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  console.log(arr1, arr2);

  if (arr1.length !== arr2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < arr1.length; i++) {
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++;
    } else {
      counter1[arr1[i]] = 1;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (counter2[arr2[i]]) {
      counter2[arr2[i]]++;
    } else {
      counter2[arr2[i]] = 1;
    }
  }

  for (let property in counter1) {
    if (!counter2[property]) return false;
    if (counter2[property] !== counter1[property]) return false;
  }
  return true;
}

console.log(sameFrequency("abbc", "aabc"));
console.log(sameFrequency("abba", "abab"));
console.log(sameFrequency("aasdebasdf", "adfeebed"));