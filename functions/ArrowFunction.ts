let withParameters = (x: number, y: number): number => {
    return x + y;
}
console.log(withParameters(10, 20));


var withoutParameter =  () => console.log('Tung Duong Khac')

//Arrow function in Class
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
            this.empName = name;
            this.empCode = code;
    }

    display = () => console.log(this.empCode +' ' + this.empName)
}
let emp = new Employee(12345, 'tung');
emp.display();

