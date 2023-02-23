console.log("===========step1===========");
function maleMarriageEligibility(gender, age, boyName) {
  var maleMarriage =
    gender == "Male" && age >= 21
      ? `Hey *${boyName}* you are *eligible* for marriage`
      : `Hey *${boyName}* you are *not eligible* for marriage`;
  return maleMarriage;
}

var m1 = maleMarriageEligibility("Male", 25, "Billgates");
console.log(m1);
var m2 = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(m2);

console.log("===========step2===========");
function femaleMarriageEligibility(gender, age, girlName) {
  var fMarriage =
    gender == "Female" && age >= 18
      ? `Hey *${girlName}* you are *eligible* for marriage`
      : `Hey *${girlName}* you are *not eligible* for marriage `;
  return fMarriage;
}

var f1 = femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(f1);
var f2 = femaleMarriageEligibility("Female", 27, "Malinda Gates");
console.log(f2);
