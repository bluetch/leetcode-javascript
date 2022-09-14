const uniqueLetterString = (str) => {
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;

  while (end < str.length) {
    console.log(counter);
    if (counter[str[end]]) {
      // can find
      counter[str[end]]--;
      start++;
    } else {
      // can not find
      counter[str[end]] = 1;
      end++;
      if((end - start) > maxLength){
        maxLength = end - start;
      }
    }
  }
  if(maxLength == -Infinity){
    console.log("cannot find unique letters substring");
    return null;
  }else{
    console.log(maxLength);
    return maxLength;
  }
}

uniqueLetterString("thisisshowwedoit");