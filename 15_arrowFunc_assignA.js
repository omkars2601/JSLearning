console.log(
  `===== Step 1 : Arrow function with no args & no return value =====   `
);
const day = () => {
  console.log("Good Morning, Today is Monday");
};
day();

console.log(
  `===== Step 2 : Arrow function with 3 args & no return value =====   `
);
const multipy = (num1, num2, num3 = 1) => {
  // assigned default value to num3
  console.log("Multiplication is:", num1 * num2 * num3);
};
multipy(5, 5, 2);
multipy(10, 4);

console.log(
  `===== Step 3 : Arrow function with 5 args &  return value =====   `
);
const addition = (num1, num2, num3, num4, num5) => {
  return `Addition is: ${num1 + num2 + num3 + num4 + num5}`;
};

let result = addition(100, 100, 200, 349, 756);
console.log(result);
let result2 = addition("I am", " learning", " ES6", " features", " in depth");
console.log(result2);
