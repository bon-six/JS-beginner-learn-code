
//console.log(`variable num before var definition: ${num}`)
let num = 10;
function test() { 
   let num = 100; 
   console.log(`The value of num inside func is ${num}`);
   for (let num=300; num<302; num++){
       console.log(`The value inside for loop is ${num}`);
   } 
   console.log(`The value of num inside func after loop is ${num}`);
} 
console.log(`value of num outside func is ${num}`);
test();