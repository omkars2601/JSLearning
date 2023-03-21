const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`------Step 1 log elements with index-------`);
arrayNumbers.forEach((nums, index) => {
  console.log(`Array element: ${nums} & Index value:${index}`);
});

console.log(`------Step 2 log positive numbers-------`);
const arrayOfPositives = [];
arrayNumbers.forEach((numbers) => {
  if (numbers >= 0) {
    arrayOfPositives.push(numbers);
  }
});
console.log(`Positive nums in array: ${arrayOfPositives}`);

console.log(`------Step 3 log negative numbers in array-------`);
const arrayOfNegatives = [];
arrayNumbers.forEach((num) => {
  if (num < 0) {
    arrayOfNegatives.push(num);
  }
});
console.log(`Negative nums in array: ${arrayOfNegatives}`);

console.log(`------Step 4 log even numbers in array-------`);
const arrayOfEvens = [];
arrayNumbers.forEach((nums) => {
  if (nums % 2 == 0) {
    arrayOfEvens.push(nums);
  }
});
console.log(arrayOfEvens);

console.log(`------Step 4 log sum of numbers in array-------`);
let sum = 0;
arrayNumbers.forEach((nums) => {
  sum = sum + nums;
});
console.log(`Sum of all nums in array: ${sum}`);

console.log(`------Step 5 log even index numbers in array-------`);
const arrayOfEvenIndexNums = [];
arrayNumbers.forEach((nums, index) => {
  if (index % 2 == 0) {
    arrayOfEvenIndexNums.push(nums);
  }
});
console.log(`Even index nums in array is: ${arrayOfEvenIndexNums}`);
