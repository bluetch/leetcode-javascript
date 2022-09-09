/*

====================================================================================

1. Japan flag

====================================================================================
*/

/*
====================================================================================

2. composite Function
composite function please write a function that takes multiple functions as arguments and return a composition function.

* please note that the execute order is right to the left

eg: func(add3, multiple2)(2) // return 7
eg: func(add3, multiple2, add5)(10) // return 33

====================================================================================
*/

const compose = (...fns) => (initialVal) => fns.reduceRight((val, fn)) => fn(val), initialVal);


/*
====================================================================================

3. JavaScript: Verify Input Value
Solution: https://stackoverflow.com/questions/64872918/javascript-basic-function-validation-runtime-error

====================================================================================
*/
function makeInputVerifier(minimum, maximum) {
  // write your code here
  let mini = minimum;
  let maxi = maximum;

  return function verify(val) {
    if (val < mini) return "Input is less than minimum value";
    if (val >= mini && val <= maxi) return "Input is in range";
    return "Input is more than maximum value";
  }
}
/*
====================================================================================

4. No Pairs Allowed
Example
words=['add', 'boook', 'break']
function minimalOperations(words){
}
Solution: https://github.com/muhammedaliacis/Coderspace-JSExam/blob/e55d5f47eb90978daa8896f2cec7ab482fcc1c4d/Algorithm/index.js

====================================================================================
*/

function minimalOperations(words) {
  // Write your code here
  let i = 0;
  let pointer = 0;
  let count = 0;
  var arr = [];
  words.forEach(function (word) {
    while (word[i]) {
      if (word[i] === word[i + 1] && word[i] === word[i + 2]) {
        count++;
        i += 1;
      }
      else if (word[i] === word[i + 1] && word[i] !== word[i + 2]) {
        count++;
      }
      i++;
    }
    arr[pointer] = count;
    pointer++;
    count = 0;
    i = 0;
  })
  return (arr);

}
/*
====================================================================================

5. JavaScript: Inventory List
Solution: https://gist.github.com/abu-hasib/89875a0cce90b3b8bdc26ae5e08c6767

====================================================================================
*/

function inventory() {
  return {
    items: [],
    add: function (item) {
      if (this.items.includes(item)) {
        return
      }
      this.items.push(item);
    },
    remove: function (item) {
      if (this.items.includes(item)) {
        let index = this.items.indexOf(item)
        if (index > -1) {
          this.items.splice(index, 1)
        }
      }
    },
    getList: function () {
      return this.items
    }
  }
}
