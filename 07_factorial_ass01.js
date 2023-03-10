function factorialOfNum(num) {
  if (typeof num != "number" || isNaN(num) || num <= 0) {
     return `Invaid Number: ${num}`
  } else {
    let fact = 1;
    for (let index = num; index >= 1; index--) {
      fact = fact * index;
    }
    return `Factorial of number: ${num} is ${fact}`;
  }
  
}

let re1 = factorialOfNum(5);
console.log(re1);
let re2 = factorialOfNum(3);
console.log(re2);
let re3 = factorialOfNum(null);
console.log(re3);
let re4 = factorialOfNum(8);
console.log(re4);
let re5 = factorialOfNum(undefined);
console.log(re5);
let re6 = factorialOfNum(9);
console.log(re6);
let re7 = factorialOfNum(0);
