const arrayOFNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayOFNumbers);
console.log(`===== Step1 Add 10 into each element & log result=====`);
const result = arrayOFNumbers.map(numbers => numbers+10)
console.log(result);

console.log(`===== Step2 Square each element & log result=====`);
const arrayOfSquares = arrayOFNumbers.map( numbers => numbers**2);  // no need to write () if only 1 arg 
console.log(arrayOfSquares); //no need to write {} when want to log/return only 1 line
                             // no need to wite return when code is of 1 line

console.log(`===== Step3 Add corresponding index value to each element & log result=====`);
const arrayOfAddition = arrayOFNumbers.map((numbers,index) => {
    return (` ${numbers}, ${index}`);
})
console.log(arrayOfAddition);
