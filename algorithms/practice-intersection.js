/*
Write a function that takes two arrays as parameters, and then return an array that is the intersection of these two arrays. For example, Intersection([1,2,3],[5,16,1,3]) should return [1,3].

EX:
  intersection([15,3,6,8,24,16], [11,3,9,6,15,8]);
  // [3,6,8,15]
*/

const intersection = (arr1, arr2) => {
  // bigO n^2

  // let answer = [];
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] === arr2[j]) {
  //       answer.push(arr1[i]);
  //     }
  //   }
  // }
  // console.log(answer);
  // return answer;

  // Counter algorithms: BigO (n+m)
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }
  // loop over the counter
  for (let property in counter) {
    if (counter[property] > 1) {
      result.push(property);
    }
  }

  console.log(result);
  return result;
}

/* 求差集 */

// const difference = (arr1, arr2) =>{
//   let seta = new Set(arr1);
//   let setb = new Set(arr2);
//   let difference = Array.from(new Set(arr1.concat(arr2).filter(v=>!seta.has(v) || setb.has(v))));

// }