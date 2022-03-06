
let i = 5;
let f = 7.2;
let s = 'abc';
let b = false;

let sym = Symbol();
console.log(sym, typeof sym);
let sym2 = Symbol(44);
let sym3 = Symbol('x');
console.log(sym2, typeof sym2);
console.log(sym3, typeof sym3);

let sym4 = Symbol.for(44);
console.log(sym4, typeof sym4);
console.log(sym4==sym2);

let sym5 = Symbol(44);
console.log(sym5==sym2);

let sym6 = Symbol.for(44);
console.log(sym6 == sym4);

console.log(Symbol.keyFor(sym2));
console.log(Symbol.keyFor(sym6));

//console.log(s+sym6);      // no implicit convertion
console.log(s+String(sym6));  // can explit convert to string
//console.log(Number(sym6));  // cannot convert to number.
console.log(Boolean(sym6));  //can explicit conver to boolean. when has any symbol value, convert to true.