

let num_arr = [3, 2.5, 2, 1.5, 1, 0, -1];

for (const num of num_arr) {
    console.log(num);
}

for (let i = 0; i<num_arr.length; i++) {
    console.log(num_arr[i]);
}

for (const i in num_arr) {
    console.log(num_arr[i]);
}