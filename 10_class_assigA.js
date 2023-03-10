class Vehicle {
  constructor(brandName, model, color, price) {
    (this.brandName = brandName),
      (this.model = model),
      (this.color = color),
      (this.price = price);
  }
}

const tataVehicle = new Vehicle("Tata", "Punch", "White", "8 Lakhs");
const mahindraVehicle = new Vehicle("Mahindra", "Thar", "Black", "17 Lakhs");
const hundaiVehicle = new Vehicle("Hundai", "Verna", "Black", "15 Lakhs");
const marutiVehicle = new Vehicle("Maruti", "Swift", "Red", "9 lakhs");
const kiaVehicle = new Vehicle("Kia", "Seltos", "Grey", "14 Lakhs");

arrayOfVehicles = [
  tataVehicle,
  mahindraVehicle,
  hundaiVehicle,
  marutiVehicle,
  kiaVehicle,
];

console.log(`===== Step 1 : Vehicles Details =====`);
//traversing object using forof loop
for (const element of arrayOfVehicles) {
  console.log(
    `${element.brandName}, ${element.model}, ${element.color}, ${element.price}`
  );
}

console.log(`===== Step 2 : College Details =====`);
class College {
  constructor(name, location, university, collegeGrade) {
    (this.name = name),
      (this.location = location),
      (this.university = university),
      (this.collegeGrade = collegeGrade);
  }
}

const dypCollege = new College(
  "D Y Patil Institue",
  "Pimpri",
  "Pune University",
  "A+"
);
const jspmCollege = new College(
  "J S P M Institue",
  "Wagholi",
  "Pune University",
  "A"
);
const patilCollege = new College(
  "Patil College",
  "Kolhapur",
  "Shivaji University",
  "B"
);
const spCollege = new College(
  "S P College",
  "Hadpsar",
  "Autonomus University",
  "B+"
);

function traverseObject(clg) {
  for (const key in clg) {
    if (Object.hasOwnProperty.call(clg, key)) {
      const element = clg[key];
      console.log(`${key} : ${element}`);
    }
  }
}
console.log(`**********`);
traverseObject(dypCollege);
console.log(`**********`);
traverseObject(jspmCollege);
console.log(`**********`);
traverseObject(patilCollege);
console.log(`**********`);
traverseObject(spCollege);

console.log(`===== Step 3 : WAP to find num is prime or not =====`);

let num = 11;

if (num == 1) {
  console.log(`${num} is neighter prime nor composite`);
} else if (num < 1) {
  console.log(`${num} is not prime number`);
} else {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      var result = `${num} is not prime number`;
      break;
    } else {
      var result = `${num} is not prime number`;
    }
  }
  console.log(result);
}
