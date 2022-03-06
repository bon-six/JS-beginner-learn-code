function factorial(a) {
    if (a==1 || a==0) {
        return 1;
    } else {
        return a*factorial(a-1);
    }
}

f1 = factorial(3);
console.log(f1);


(function() { 
    var msg = "Hello World" 
    console.log(msg)
 })()