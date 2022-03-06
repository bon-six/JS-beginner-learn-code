
let num_arr = [2,4,6,8];
console.log(typeof num_arr);
console.log(num_arr instanceof Array);

console.log(num_arr[0]);

let num_arr3=[2,4,6,8];
console.log(num_arr==num_arr3);

num_arr3=num_arr;
console.log(num_arr==num_arr3);

console.log([1]==[1])

num_arr[6] = 9; //index exceeded, insert empty items in front.
console.log(num_arr);

delete num_arr[2];
console.log(num_arr);

let x_arr = ["apple", undefined, , "banana"]
console.log(x_arr)

let a_arr = Array(4);

console.log(a_arr);

a_arr[0] = 'a';
a_arr[2] = 40;

console.log(a_arr);

a_arr[6] = true; //index exceeded, insert empty items in front.

console.log(a_arr);

