class Person {
    protected name: string;
    public constructor(name: string) {
        this.name = name;
    }
}

// class Student extends Person {
//     private faculity: String;
//     public constructor(name: String, faculity: string) {
//         super(name)
//         this.faculity = faculity;
//     }
// }
let p = new Person("Tung");
console.log(p.name)