
let obj1 = {a:1,b:2,c:3};

for (const key in obj1) {
    console.log(key);
    console.log(obj1[key]);
}

delete obj1.b;
console.log(obj1);
console.log('b' in obj1);
console.log('a' in obj1);
