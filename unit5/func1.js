
function func1(a,b) {
    console.log(`Inside func1: received ${a} and ${b}`);
    //return (a+b);
}

let x = func1(1,2);
console.log(`after call received ${x}`);

x = func1('abc','def');
console.log(`after call received ${x}`);

x = func1('abc',200);
console.log(`after call received ${x}`);

x = func1(200, 'abc');
console.log(`after call received ${x}`);

x = func1(3);  //second argument `b` will be undefined
console.log(`after call received ${x}`);   //operator on undefined result in NaN

x = func1(3,4,5)  //5 will just be silently ignored in func1
console.log(`after call received ${x}`);