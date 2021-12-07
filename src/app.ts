class Department {
  private employees: string[] = []; //class내에서만 접근가능

  constructor(private readonly id: number, public name: string) {}
  describe(this: Department) {
    console.log(`Department id: ${this.id} name: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department(1, "accounting");

accounting.addEmployee("max");
accounting.describe();
accounting.printEmployeeInformation();
