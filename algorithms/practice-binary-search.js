/*
Binary search is a search algorithm that finds the position of a target value within a sorted array.
More efficient thatn linear search, but only works with sorted data set.
*/

const arr = [1, 3, 6, 9, 10, 11, 15, 17, 19, 22, 26, 29, 31, 32, 35, 48, 50, 51, 56, 59];

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

binarySearch(arr, 12);

// Math.abs(值):回傳絕對值
// Math.ceil(值):回傳比值大中，最接近的整數
// Math.floor(值):回傳比值大中，最接近的整數
// Math.round(值):回傳四捨五入的數