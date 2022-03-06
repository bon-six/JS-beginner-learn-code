function func2(num1, num2=8) {
    console.log(`Inside func2: received ${num1} and ${num2}`);
    return (num1*10**num2);
}

let x = func2(3);
console.log(`Value return is: ${x}`);

x = func2(4.5, 4);
console.log(`Value return is: ${x}`);

x = func2()
console.log(`Value return is: ${x}`);