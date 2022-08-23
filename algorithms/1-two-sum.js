

/**
 * Problem: https://leetcode.com/problems/two-sum/
 * Difficulty: Easy
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Solution: Hash Map ver. 
  // 將每一個數字與target的差值加入map儲存，新的數字若相符即回傳
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]] || map[nums[i]] === 0)
      return [map[nums[i]], i];
    else
      map[target - nums[i]] = i;
  }
};

// Solution 2: 
// const twoSum = (nums, target) => {
//   let storage = {};

//   for (let [index, num] of nums.entries()) {
//     if (storage[num] !== undefined) return [storage[num], index];
//     storage[target - num] = index;
//   }

// }

// Example
// [2, 7, 11, 15]
// index = 0
// num = 2
// storage = {
//   "7": 0,
// }


// Object.keys (ES5)

// 若以只想取得物件中的所有 property key，那 Object.keys() 就很方便，但是，
// 若想一次拿到 property key 和 property name，應該就可以說 Object.keys() 是過度期吧？
// 因為以現代的角度來看，還有更方便的 Object.entries()


// Object.values (ES2017, ES8)
// Object.values() 是直接取得所有 property value，並以陣列回傳。看一個簡單的範例：
// let object = {a: 1, b: 2, c: 3};
// console.log(Object.values(object));  // [1, 2, 3]


// Object.entries

// Object.entries() 可以把物件的 key 與 value 同時取出，並且放入一個陣列中
// let object = {a: 1, b: 2, c: 3};
// console.log(Object.entries(object));
// // [
// //   ["a", 1],
// //   ["b", 2],
// //   ["c", 3]
// // ]

// let object = {a: 1, b: 2, c: 3};

// for (const [key, value] of Object.entries(object)) {
//   console.log(key, value);
// }
// // a 1
// // b 2
// // c 3

// Object.entries(object).forEach(([key, value]) => {
//   console.log(key, value);
// });
// // a 1
// // b 2
// // c 3

// reduce, map物件
