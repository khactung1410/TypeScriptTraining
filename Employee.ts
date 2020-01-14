class Employee {
    name: String;
    address: String;
    age: Number;

    constructor(name: String, address: String, age: Number) {
        this.name = name
        this.address = address
        this.age = age
    }

    out() {
        return this.name + " - " + this.address + " - " + this.age + " years old.";
    }
}

let newEmployee = new Employee("Duong Khac Tung", "abcdef", 22);
console.log(newEmployee.out());