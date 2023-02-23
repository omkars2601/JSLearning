console.log("==========Step1==========");
function greaterNumber(num1, num2) {
  var result =
    num1 > num2 ? `Greater number is: ${num1}` : `Greater number is: ${num2}`;
  console.log(result);
}
console.log("Greatest num between 10 & -10");
greaterNumber(10, -10);
console.log("Greatest num between 800 & 899");
greaterNumber(800, 899);

console.log("==========Step2==========");
console.log("If num is **even:true**  and  num is **odd:false**");
function isEvenOrOddNum(value) {
  var resultEo = value % 2 == 0 ? true : false;
  return resultEo;
}

var r1 = isEvenOrOddNum(29);
console.log(`For num 29: ${r1}`);
var r2 = isEvenOrOddNum(44);
console.log(`For num 44: ${r2}`);
var r3 = isEvenOrOddNum(0);
console.log(`For num 0: ${r3}`);
var r4 = isEvenOrOddNum(101);
console.log(`For num 101: ${r4}`);

console.log("==========Step3==========");
function wordLength(word) {
  var LenOfWord = word.length;
  var result1 =
    LenOfWord % 2 == 0
      ? `${word}: word length is *even*`
      : `${word}: word length is *odd*`;
  return result1;
}
var w1 = wordLength("JavaScript");
console.log(w1);
var w2 = wordLength("developer");
console.log(w2);
var w3 = wordLength("Google");
console.log(w3);
