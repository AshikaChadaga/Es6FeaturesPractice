function f(x, y = 12) {
    return x + y;
}
console.log(f(3) == 15);

function f2(x = 6, y = 12) {
    return x + y;
}
console.log(f2()); //18

function f3(x = 6, y = 12) {
    return x + y;
}
console.log(f3(5,5));
