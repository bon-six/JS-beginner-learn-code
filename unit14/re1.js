let re1 = /\b\d+\b/g;

let text = 'Here are 10 books and it cost 58 dollars.';

// RegExp with 'g' or 'y', will record lastIndex, 
// and each time exec will start from lastIndex to continue scan.
let result
while ((result  = re1.exec(text)) !== null) {
    console.log(result);
    console.log(`next start ${re1.lastIndex}`);
}

// RegExp will no 'g' or 'y', will always start from beginning to scan.
// so repeated scan will give same result.
let re2 = /\b\d+\b/;
console.log(re2.exec(text));
console.log(re2.exec(text));

// with parentheses
// the return array will have more items of sub-strings, one for each parentheses.
let re3 = /\b(\d+)\b\s\b(\w+)\b/g;
console.log(re3.exec(text));