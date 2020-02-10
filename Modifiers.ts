class Person {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Student extends Person {
    private faculity: string;
    public constructor(name: string, faculity: string) {
        super(name)
        this.faculity = faculity;
    }
}
let p = new Student("Tung","abcd");