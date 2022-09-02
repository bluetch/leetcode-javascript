/*
Write a function called minSubArray which accepts two parameters, an array of positive integers and a positive integer. This function should return the minimal length of a continuous subarray - the sum of elements inside this subarray has to be greater than or equal to the positive interger parameter. If subarray not found, then return 0;

Ex:
  minSubArray([9,8,1,4,9,5,1,2],11) //2
  minSubArray([8,1,6,15,3,16,5,7,14,30,12],60)
*/
const minSubArray = (arr, sum) => {
  let start = 0,
    end = 0,
    total = 0,
    minLength = Infinity;

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= sum) {
      let currentLength = end - start;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      total -= arr[start];
      start++;
    } else if (end >= arr.length) {
      break;
    }
  }
  if (minLength === Infinity) {
    console.log("Cannot find subarray that can sum up to the given number");
    return -1;
  } else {
    console.log(minLength);
    return minLength;
  }
}