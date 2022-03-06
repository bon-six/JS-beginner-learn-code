
let i = 3;
let b = true;
let s = '123';

// string with other type, will convert to string
// number with boolean type, will convert to number
console.log(i+s);
console.log(s+i);
console.log(i*b);
console.log(b+s);

// explicit conversion will change the defaul rule.
console.log(i+Number(s));