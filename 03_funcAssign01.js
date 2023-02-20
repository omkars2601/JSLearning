console.log("*****step1*****");
// Function with no arguments and no return value

function profileName() {
  console.log("My profile in company is: Frontend Developer");
}
profileName();

function techStack() {
  console.log("My techstack is: Angular Developer");
}
techStack();

console.log("*****step2*****");
function personalDetails(firstName, lastName, collegeName) {
  console.log("Omkar", "Sonawane", "D Y Patil");
}
personalDetails();

console.log("*****step3*****");
var num1 = 1000;
var num2 = 2000;

function swapValuesDude(value1, Value2) {
  console.log("Before swapping", value1, Value2);
  var temp = value1;
  value1 = Value2;
  Value2 = temp;
  console.log("After swapping", value1, Value2);
}
swapValuesDude(num1, num2);
swapValuesDude("virat", "Anushka");

console.log("*****step4*****");
function addThreeValues(value1, value2, value3) {
  var sum = value1 + value2 + value3;
  return sum;
}
var add = addThreeValues(10.23, 600, 40);
console.log("Sum of three numbers is:", add);

add = addThreeValues("Hello", "Good", "Morning");
console.log("Sum of three strings is:", add);
