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

console.log(`-------Step 1 Log TCS employee name & company-------`);
array_employees.forEach((employees) => {
  if (employees.emp_company == "TCS") {
    console.log(
      `Employee Name: ${employees.emp_name} & Company Name: ${employees.emp_company}`
    );
  }
});

console.log(`-------Step 2 Log employess details whoes salary >= 50000-------`);
array_employees.forEach((employees) => {
  if (employees.emp_salary >= 50000) {
    console.log(
      `Emp Name: ${employees.emp_name} & Salary: ${employees.emp_salary} & Emp ID: ${employees.emp_id} & Dept: ${employees.emp_dept} & Company: ${employees.emp_company}`
    );
  }
});

console.log(`-------Step 3 Log sum of all employees salary -------`);
let sumOfSalary = 0;
array_employees.forEach((employees) => {
  sumOfSalary = sumOfSalary + employees.emp_salary;
});
console.log(`Total sum of salary is: ${sumOfSalary}`);

console.log(`-------Step 3 Log average salary -------`);
let avgSalary;
array_employees.forEach((employees) => {
  avgSalary = sumOfSalary / array_employees.length;
});
console.log(`Average salary is: ${avgSalary}`);

console.log(
  `-------Step 3 Log details of IT or HR dept employee salary >= 75000-------`
);
array_employees.forEach((employees) => {
  if (
    employees.emp_salary >= 75000 &&
    (employees.emp_dept == "IT" || employees.emp_dept == "HR")
  ) {
    console.log(
      `Emp Name: ${employees.emp_name} & Salary: ${employees.emp_salary} & Emp ID: ${employees.emp_id} & Dept: ${employees.emp_dept} & Company: ${employees.emp_company}`
    );
  }
});
