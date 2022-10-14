/*
Write two functions that calculate the max and min sum of n consecutive numbers in an array.

Ex:
  maxSum([2,7,3,0,6,1,-5,-12,-11],3);
  minSum([2,7,3,0,6,1,-5,-12,-11],3);
*/

const arr = [2, 7, 3, 0, 6, 1, -5, -12, -11];

const maxSum = (arr, size) => {
  // let max_value = -Infinity;

  // if (size > arr.length) return null;

  // for (let i = 0; i <= arr.length - size; i++) {
  //   let attempt = 0;
  //   for (let j = i; j < i + size; j++) {
  //     attempt += arr[j];
  //   }
  //   if (attempt > max_value) {
  //     max_value = attempt;
  //   }
  // }
  // console.log(max_value);
  // return max_value;

  // improve
  if (size > arr.length) return null;

  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    maxValue += arr[i];
  }

  let tempValue = maxValue;
  for (let j = size; j < arr.length; j++) {
    tempValue = tempValue + arr[j] - arr[j - size];
    if (tempValue > maxValue) maxValue = tempValue;
  }
  console.log(maxValue);
  return (maxValue);
}

const minSum = (arr, size) => {
  let min_value = Infinity;

  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let attempt = 0;
    for (let j = i; j < i + size; j++) {
      attempt += arr[j];
    }
    if (attempt < min_value) {
      min_value = attempt;
    }
  }
  console.log(min_value);
  return min_value;
}


const maxSum2 = (arr, size) => {

  if (size > arr.length) return null;

  for (let i = 0; i <= arr.length - size; i++) {
    let max_value = 0;
    for (let j = i; j < i + size; j++) {
      max_value+=arr[j];
      console.log(arr[i], arr[j]);
    }
    console.log("max_value", max_value);
  }
}

maxSum2(arr, 3);
