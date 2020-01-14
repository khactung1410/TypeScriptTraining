function greeter(person: String) {
    return "Hello, " + person;
}
let obj: Object = {name: 'Chung', age: 22}
let obj2 = {name: 'abcjfgd',...obj}
let obj3 = {...obj, name: 'abcjfgd'}

console.log(obj)
console.log(obj2)
console.log(obj3)