var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function greeter(person) {
    return "Hello, " + person;
}
var obj = { name: 'Chung', age: 22 };
var obj2 = __assign({ name: 'abcjfgd' }, obj);
var obj3 = __assign(__assign({}, obj), { name: 'abcjfgd' });
console.log(obj);
console.log(obj2);
console.log(obj3);
