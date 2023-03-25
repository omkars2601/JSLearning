const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ] ;
console.log(arrayRollNumbers);
console.log(`=====Step1 reverse the array=====`);
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

console.log(`=====Step2 use sort method as it is=====`);
// arrayRollNumbers.sort();
// console.log(arrayRollNumbers);

console.log(`=====Step3 sort array in accending order by custom logic=====`);
arrayRollNumbers.sort( (a,b) => {
   return a>b ? 1 : -1;
})
console.log(arrayRollNumbers);

console.log(`=====Step3 Find the greatest num from array=====`);
console.log(`Greatest num: ${arrayRollNumbers[arrayRollNumbers.length-1]}`);

console.log(`=====Step4 Find the smallest num from array=====`);
console.log(`Smallest num: ${arrayRollNumbers[0]}`);

console.log(`=====Step4 Remove duplicates from array=====`);
console.log(`Before removing duplicates: ${arrayRollNumbers}`);
const arrayAfterRemovingDuplicates = [...new Set(arrayRollNumbers)];
console.log(`After removing duplicates: ${arrayAfterRemovingDuplicates}`);