const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`****** Step 1 *****`);
console.log(`Total nums available in array is: ${arrayNumbers.length}`);
console.log(`****** Step 2 *****`);
console.log(
  `First element is: ${arrayNumbers[0]} & Last element is: ${
    arrayNumbers[arrayNumbers.length - 1]
  }`
);
console.log(`****** Step 3 *****`);
console.log(
  `Third last element using length property is: ${
    arrayNumbers[arrayNumbers.length - 3]
  }`
);
console.log(`****** Step 4 *****`);
let arrayEvenNums = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 == 0) {
    arrayEvenNums.push(element);
  }
}
console.log(`All even numbers is: ${arrayEvenNums}`);
console.log(`****** Step 5 *****`);
let arrayOddNums = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 2 != 0) {
    arrayOddNums.push(element);
  }
}
console.log(`All odd numbers is: ${arrayOddNums}`);
console.log(`****** Step 6 *****`);
let evenSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 == 0) {
    evenSum = evenSum + element;
  }
}
console.log(`Sum of all even elements is: ${evenSum}`);
console.log(`****** Step 7 *****`);
let oddSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (index % 2 != 0) {
    oddSum = oddSum + element;
  }
}
console.log(`Sum of all odd elements is: ${oddSum}`);
console.log(`****** Step 8 *****`);
allNumsSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  allNumsSum = allNumsSum + element;
}
console.log(`Sum of all elements is: ${allNumsSum}`);
console.log(`****** Step 9 *****`);
let arrayNumsMultipleOf5 = [];
for (let index = 0; index < arrayNumbers.length; index++) {
  const element = arrayNumbers[index];
  if (element % 5 == 0) {
    arrayNumsMultipleOf5.push(element);
  }
}
console.log(`Numbers in multiple of 5 are: ${arrayNumsMultipleOf5}`);
console.log(`****** Step 10 *****`);
console.log(`Is number 115 available in array : ${arrayNumbers.includes(115)}`);
console.log(`****** Step 11 *****`);
console.log(`Is number 23 available in array : ${arrayNumbers.includes(23)}`);
console.log(`****** Step 12 *****`);
console.log(`Array after inserting 55, 66 before index `);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);
console.log(`****** Step 13 *****`);
console.log(`Array after deleting 3 elements starting from index 4`);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);
