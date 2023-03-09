let professor = {
  name: "Rahul",
  lastName: "Jadhav",
  department: "IT",
  id: "402210",
  college: "COEP",
  degrees: {
    engineering: "CSC",
    masters: "Information Technology",
    PHD: "Adv Computing",
  },
  certificates: [
    "Hacker Rank Participation",
    "Certificate in IFE course",
    "Certificate in Adv Programming",
  ],
  showDegrees: function () {
    return `Engineering ${this.degrees.engineering} & Masters ${this.degrees.masters} & PHD ${this.degrees.PHD}`;
  },
};
console.log(`=====Object=====`);
console.log(professor);
console.log(`=====Output after concating degrees=====`);
const degrees = professor.showDegrees();
console.log(`Teacher total degrees are ${degrees}`);
console.log(`=====Adding new property totalExperience: "14 years"=====`);
professor.totalExperiance = "14 years";
console.log(professor.totalExperiance);
console.log(`=====Object after modifing id===== `);
professor.id = "504530";
console.log(professor);

professor.certificates.push("Oracle Certified");
console.log(`=====Logging last element of the array certificates=====`);
console.log(professor.certificates[professor.certificates.length - 1]);
