let a1 = [10,20,true,'abc'];

console.log(a1, typeof a1);

for (const item of a1) {
    console.log(item, typeof item);
}

let iter = a1[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());