/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let vowelCount = 0;
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let str_array = str.toLowerCase().split('');

    for(let i = 0; i < str_array.length; i++){
      for(let j = 0; j < vowel.length; j++){
        if(str_array[i] == vowel[j]){
          vowelCount += 1;
        }
      }
    }
    return vowelCount;
}

module.exports = countVowels;