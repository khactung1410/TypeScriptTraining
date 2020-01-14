var Employee = /** @class */ (function () {
    function Employee(name, address, age) {
        this.name = name;
        this.address = address;
        this.age = age;
    }
    Employee.prototype.out = function () {
        return this.name + " - " + this.address + " - " + this.age + " years old.";
    };
    return Employee;
}());
var newEmployee = new Employee("Duong Khac Tung", "abcdef", 22);
console.log(newEmployee.out());
