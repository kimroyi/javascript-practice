function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(1, 2));
console.log(sum.call(this, 1, 2));
