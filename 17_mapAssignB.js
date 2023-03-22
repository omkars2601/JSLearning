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
  
  const array_employees = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi,];

  console.log(`======Step1 List of all employees & log array=====`);
  const arrayOfEmpNames = array_employees.map((employees) => {
    return employees.emp_name;  // always use return in map
  });
  console.log(arrayOfEmpNames);

  console.log(`======Step2 List of all department & log array=====`);
  const arrayOfdept = array_employees.map( (employees) => {
   return employees.emp_dept;
  });
  console.log(arrayOfdept);
  const afterRemovingDuplicates = [...new Set(arrayOfdept)];
  console.log(`**After removing duplicates**`);
  console.log(afterRemovingDuplicates);

  console.log(`======Step3 List of employee id's & log array=====`);
  const arrayOfempIds = array_employees.map( employees => employees.emp_id);
// no need to write () if 1 ard & {} if 1 line of code & return if 1 line of code
  console.log(arrayOfempIds);

  console.log(`======Step4 List of employee names working in TCS=====`);
 const arrayOfTcsEmp = array_employees.map( (employees) => {
    if (employees.emp_company == "TCS") {
        return employees.emp_name;
    }
        });

 console.log(`output is : ${arrayOfTcsEmp}`);