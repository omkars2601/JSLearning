console.log(`Start`);
var num = 10;
if (num>0){
console.log(`inside if`);
console.log(`number is positive ${num}`);
}
console.log(`End`);

var ageForVote= 20;
if(ageForVote>=18){
    console.log(`You are elegible for voting`);
    console.log(`age is: ${ageForVote}`);
}
console.log('End of next if block');

function checkEvebOdd(num1){
    if(num1%2==0){
        return"EVEN";
    }
    if(num1%2!=0){
        return "ODD";
    
    }

}
var result = checkEvebOdd(45);
console.log(`given number 45 is ${result}`);

var num2= -5;
if (num2>0) {
    console.log(`Number ${num2} is positive`);
} else {
    console.log(`Number ${num2} is negative`);
}

function maleMarriageEligibility(gender,age,boyName){
    if (gender=="Male" && age>=21) {
        console.log("You are eligible");
        
    }
    else{
        console.log("Not eligible");
    }
}

maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Anil");