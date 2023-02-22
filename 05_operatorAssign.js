function squareOfWordLength(value) {
  var lengthOfValue = value.length;
  var squareOfLength = lengthOfValue ** 2;
  return `String is: "${value}" Length of string is:${lengthOfValue} Square of length is:${squareOfLength}`;
}
console.log("==========step1==========");
var result1 = squareOfWordLength("JavaScript");
console.log("**Word-1**", result1);
var result2 = squareOfWordLength("Google Chrome");
console.log("**Word-2**", result2);
var result3 = squareOfWordLength("Developer Smart");
console.log("**Word-3**", result3);

console.log("==========step2==========");
function stringResult() {
  var string = "I am Angular Developer";
  var stringLength = string.length;
  var splitString = string.split(" ");
  var totalWords = splitString.length;
  console.log(
    "String length divide by total num of words is:",
    stringLength / totalWords
  );
  console.log(
    "String length & total words multiplication is:",
    stringLength * totalWords
  );
}

stringResult();
