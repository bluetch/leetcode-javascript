/*

Given a sorted array *nums*, remove the duplicates in-place such that each element appears only *once* and returns the number of unique numbers. The array is simply modified in-place. Only the first N numbers are un-duplicated, and the rest of the array does not matter.


## Note
- Should be done in O(1) memory and O(N) time complexity
- Array structure is unchanged - you cannot change the size of the input array at any point in the code

## Example:
Input: nums = [0,0,0,1,1,1,2,2,3,3,4]
Return value: 5
The input array is changed to = [0,1,2,3,4,...] (it doens't matter what numbers are after the first 5)

*/

let nums = [0, 0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const removeDuplicates = (nums) => {
  if (nums.length <= 1) return nums.length;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] != nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(i + 1);
  return i + 1;
}

removeDuplicates(nums);