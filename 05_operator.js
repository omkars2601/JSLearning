console.log(`===== Arithmetic Operators=====`);
var num1 = 10;
var num2 = 2;
var result1 = num1 + num2 ;
console.log(`Addition is ${result2}`);

var result2 = num1 - num2;
console.log(`Subtraction is ${result2}`);

var result3 = num1 * num2;
console.log(`Multiplication is ${result3}`);

var result4 = num1 ** num2;
console.log(`Exponential is ${result4}`);

console.log(10/3);  //division operator
console.log(14%3);  //modulus operatoe  //gives reminder


 var result5 = num1 / 3;
 console.log(` Division is ${result5} `);

 var result6 = num1 % 3; // Modulus;
 console.log(` Reminder is ${result6} `);

 var cube =  10**3;                //10*10*10;
 console.log(`Cube is ${cube}`);

 var num = 10;  //Compound addition  +=
 num+=20;    //num = num + 20
 console.log(`Compound addition ${num}`);

 console.log(`Comparispn operator`);
 var num3 = 10;
 var num4 = "10"
 console.log(num3==10);
 console.log(num3==11);
 console.log(num3==num4);   //first it converts str into number then compare because true
 console.log(num3===num4); //strict equal===  //doesnot convert str to num 
                                              //beacuse output is false
console.log(num3 != num4);  // ! Not 
console.log(10 < 20); // < less than
console.log(10 > 20); // > greater than

var marks =35;
console.log( marks >= 35);  // >= greater than equal to


var marks = 70;
var result = marks >=60 ? "allow him interviw" : "dont allow"
console.log(result);

var age =20;
var res = age >=21 ? "allow" : "dont allow"
console.log(res);

console.log("even or odd");
var myNumber = 7;
var result= myNumber % 2 == 0 ? "even" : "odd"
console.log(result);

var num1 = 10;
var num2 = 12;

var result =  num1 > num2 ? num1 : num2 ;
console.log(result);

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );
             
 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);











