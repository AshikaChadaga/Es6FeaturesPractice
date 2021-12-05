function f1(x, ...y) {
    return x * y.length;
}
console.log(f1(3, "hello", true) == 6);

function f2(x, y, z) {
    return x + y + z;
}

console.log(f2(...[1, 2, 3]) == 6);