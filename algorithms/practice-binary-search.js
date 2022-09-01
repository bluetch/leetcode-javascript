/*
Binary search is a search algorithm that finds the position of a target value within a sorted array.
More efficient thatn linear search, but only works with sorted data set.
*/

const binarySearch = (arr, num) => {
  // arr.sort((a, b) => (a - b));
  let min = 0,
    max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (num > arr[middle]) {
      min = middle + 1;
    }
    else if (num < arr[middle]) {
      max = middle - 1;
    }
    else {
      console.log(arr);
      console.log("the number: " + num + " is at " + middle);
      return middle;
    }
  }
  console.log("cannot found the number: " + num);
  return -1;
}