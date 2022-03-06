let quantity = 300;

const LEVEL_1 = 1000;
const LEVEL_2 = 500;
const LEVEL_3 = 300;

let discount = 1.0;

if (quantity >= LEVEL_1) {
    discount = 0.5;
} else if (quantity >= LEVEL_2) {
    discount = 0.6;
} else if (quantity >= LEVEL_3) {
    discount = 0.7
}

console.log('discount value is', discount)