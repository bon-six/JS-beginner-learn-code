let s1 = new Set();

console.log(s1, typeof s1);
s1.add('a').add(true).add({'a':'abc'});
console.log(s1);

function my_process(value) {
    console.log(value, typeof value);
}
s1.forEach(my_process);

s1.add('a');  //primitive equal value, since == gives true, treat as same value
console.log(s1);
s1.add({'a':'abc'});  //object, since == gives fales, treat as different values
console.log(s1);