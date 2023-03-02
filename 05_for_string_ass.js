console.log(`******step1*****`);
var countOfVowels = function (str) {
  var count = 0;
  for (let index = 0; index < str.length; index++) {
    var char = str.charAt(index);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u" ||
      char == "A" ||
      char == "E" ||
      char == "I" ||
      char == "O" ||
      char == "U"
    ) {
      count = count + 1;
    }
  }
  return count;
};

var re = countOfVowels("JavaScript is the language Of Internet");
console.log(`count of vowels in string is: ${re}`);
var re = countOfVowels("I am Angular Developer");
console.log(`count of vowels in string is: ${re}`);
var re = countOfVowels("Hard work and commitment is the key of success");
console.log(`count of vowels in string is: ${re}`);

console.log(`******step2*****`);
function lastWordCharsCount(str) {
  count = 0;
  var emptyString = "";
  for (let index = str.length - 1; index >= 0; index--) {
    var charAtIndex = str.charAt(index);
    if (charAtIndex == " ") {
      break;
    }
    emptyString = emptyString + charAtIndex;
  }
  var countLastWordChars = emptyString.length;
  return countLastWordChars;
}

result = lastWordCharsCount("JavaScript is the language Of Internet");
console.log(
  `Given string is: "JavaScript is the language Of Internet" and count of chars in last word is: ${result}`
);
result = lastWordCharsCount("I am Angular Developer");
console.log(
  `Given string is: "I am Angular Developer"  and count of chars in last word is: ${result}`
);
result = lastWordCharsCount("Hard work and commitment is the key of success");
console.log(
  `Given string is: "Hard work and commitment is the key of success" and count of chars in last word is: ${result}`
);
