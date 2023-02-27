console.log("**********Question 1*********");
function voteEligibility(age) {
  if (age <= 0 || age > 120 || age === undefined || age == null) {
    console.log(`Invaild data -age:${age}`);
  }
  if (age >= 18 && age < 120) {
    console.log(`Congratulations! You are eligible for voting -age:${age}`);
  }
  if (age < 18 && age > 0) {
    console.log(`You are not eligible for voting -age:${age}`);
  }
}

voteEligibility(45);
voteEligibility(17);
voteEligibility(8);
voteEligibility(20);
voteEligibility(-10);
voteEligibility(200);
voteEligibility(0);
voteEligibility(undefined);
voteEligibility(null);

console.log("**********Question 2**********");
function gradeCalculation(marks) {
  if (isNaN(marks)) {
    console.log(`Please provide valid marks:${marks}`);
  }
  if (marks >= 90 && marks <= 100 && typeof marks === "number") {
    console.log(`Funtastic marks: ${marks}, Your grade is A+`);
  }
  if (marks >= 75 && marks < 90 && typeof marks === "number") {
    console.log(`Excellent marks:${marks},Your grade is A`);
  }
  if (marks >= 50 && marks < 75 && typeof marks === "number") {
    console.log(`Good marks:${marks},Your grade is B`);
  }
  if (marks >= 35 && marks < 50 && typeof marks === "number") {
    console.log(`Marks is:${marks},Your grade is C, Need improvement`);
  }
  if (marks <= 0 || marks > 100 || typeof marks === "string") {
    console.log(`Please provide valid marks:${marks}`);
  }
}

gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);
