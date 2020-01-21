var Greet = function (sayHello) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return sayHello + " " + names.join(", ") + "!";
};
console.log(Greet("Hello", "AAAA", "BBBB"));
console.log(Greet("Hello"));
