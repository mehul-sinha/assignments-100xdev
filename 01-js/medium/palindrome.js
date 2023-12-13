/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function convert_to_array(str){
  let strArr = str.toLowerCase().split('');
  let newArr = [];
  for(let i = 0; i < strArr.length; i++){
    let indChar = strArr[i].charCodeAt();
    if(indChar >= 'a'.charCodeAt() && indChar <= 'z'.charCodeAt()){
      newArr.push(strArr[i]);
    }
  }
  return newArr;
}

function isPalindrome(str) {
  let strArr = convert_to_array(str);
  let i = 0;
  let j = strArr.length - 1;
  while(i<j)
  {
    if(strArr[i] != strArr[j]){
      return false;
    }
    i++;
    j--;
  }
  return true;
}

module.exports = isPalindrome;
