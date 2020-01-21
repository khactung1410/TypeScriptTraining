let Greet = (sayHello: string, ...names: string[]) => {
    return sayHello + " " + names.join(", ") + "!";
}

console.log(Greet("Hello", "AAAA", "BBBB"));

console.log(Greet("Hello"));