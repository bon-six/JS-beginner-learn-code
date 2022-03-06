
console.log(`variable num before var definition: ${num}`);
var num = 10;
function test() { 
   var num = 100; 
   console.log(`The value of num inside func is ${num}`); 
} 
console.log(`value of num outside func is ${num}`);
test();