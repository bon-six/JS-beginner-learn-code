console.log(typeof 5.0);

let num1 = new Number(5.0);
console.log(typeof num1);
console.log(num1 instanceof Number);
console.log(num1 instanceof Object);

let num2 = 5;
console.log(typeof num2);

console.log(num1==num2);

console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);

console.log(num2.toPrecision(4));

console.log(0b110.toFixed(1));

console.log(0o753.toExponential());

console.log(0xABCD.toLocaleString());

console.log(typeof num1.valueOf());