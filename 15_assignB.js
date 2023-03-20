class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(`====== Step 1 TCS employee names & company=====`);
for (const employees of array_employees) {
  if (employees.emp_company == "TCS") {
    console.log(
      `Employee name is: ${employees.emp_name} & Company is: ${employees.emp_company}`
    );
  }
}
console.log(`====== Step 2 Finance dept employee names & dept=====`);
for (const employees of array_employees) {
  if (employees.emp_dept == "Finance") {
    console.log(
      `Department is: ${employees.emp_dept} & Employee name: ${employees.emp_name}`
    );
  }
}

console.log(
  `====== Step 3  Employees names starts with 'R' & all details=====`
);
for (const employees of array_employees) {
  if (employees.emp_name.startsWith("R")) {
    console.log(
      `Emp Name: ${employees.emp_name} & ID: ${employees.emp_id} & Dept: ${employees.emp_dept} & Salary: ${employees.emp_salary} & Company: ${employees.emp_company}`
    );
  }
}

console.log(
  `====== Step 4  Employees whoes salary > 75000 & emp name, company, salary=====`
);
for (const employees of array_employees) {
  if (employees.emp_salary > 75000) {
    console.log(
      `Emp Name: ${employees.emp_name} & Company: ${employees.emp_company} & Salary: ${employees.emp_salary}`
    );
  }
}

console.log(
  `====== Step 5  Employees whoes salary >= 50000 & It dept then log emp details =====`
);
for (const employees of array_employees) {
  if (employees.emp_salary >= 50000 && employees.emp_dept == "IT") {
    console.log(
      `Emp Name: ${employees.emp_name} & ID: ${employees.emp_id} & Dept: ${employees.emp_dept} & Salary: ${employees.emp_salary} & Company: ${employees.emp_company}`
    );
  }
}

console.log(
  `====== Step 6  Employees from company 'Infy' & log all details  =====`
);
for (const employees of array_employees) {
  if (employees.emp_company == "Infy") {
    console.log(
      `Emp Name: ${employees.emp_name} & ID: ${employees.emp_id} & Dept: ${employees.emp_dept} & Salary: ${employees.emp_salary} & Company: ${employees.emp_company}`
    );
  }
}
