
let m1 = new Map();

m1.set(1, true);
console.log(m1.has(1));
console.log(m1.has('1'));
console.log(m1.get(1), typeof m1.get(1));
m1.set('1', 'start');
console.log(m1.has('1'));
console.log(m1.get('1'), typeof m1.get('1'));

function my_callback_f(value, key) {
    console.log('inside the callback funtion');
    console.log('received:');
    console.log(`${key}, ${value}`, typeof key, typeof value);
}

m1.forEach(my_callback_f);

m1.set(true, 40)
    .set({}, {'a':444})
    .set(2, {'b': 20});
m1.forEach(my_callback_f);

function callback_2(value, key) {
    console.log(`${key}, ${value}`, typeof key, typeof value);
    if ('a' in value) {
        console.log(value['a']);
    }
    if ('b' in value) {
        console.log(value['b']);
    }
}
let m2 = new Map([[{}, {'a':444}], [2, {'b':20}]]);
m2.forEach(callback_2);