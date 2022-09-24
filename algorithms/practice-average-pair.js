/*
 Write a function that given a sorted array of integers and a Number. Find if there is any pair in the array that has average of the given Number. Find all of them. There might be multiple pairs fit the condition.

  Ex: averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
  The number pair is -11 and 14, 0 and 3, 1 and 2.
*/

const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];

const averagePair = (arr, avg) => {
  // O(n^2)
  
  // let result = [];
  // for(let i = 0; i < arr.length -1; i++){
  //   for(let j = i+1; j < arr.length ; j++){
  //     if((arr[i] + arr[j])/2 === avg){
  //       result.push([arr[i], arr[j]]);
  //     }
  //   }
  // }

  // pointer: O(n)
  let left = 0, right = arr.length - 1, result = [];
  while (right > left) {
    let temp_avg = (arr[right] + arr[left]) / 2;
    if (temp_avg > avg) {
      right--;
    } else if (temp_avg < avg) {
      left++;
    } else {
      result.push([arr[left], arr[right]]);
      right--;
      left++;
    }
  }
  console.log(result);
  return result;
}

averagePair(arr, 1.5);