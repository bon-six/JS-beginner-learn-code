
let re4 = RegExp(/\b\d{4}-\d{2}-\d{2}\b/, '');

let text = 'This book published at 2020-03-30, now is 2022-03-30, it is 2 years old.';

let result;

result = re4[Symbol.match](text);
console.log(result);

// with no 'g' flag, and with parentheses, it will return the sub string groups.
let re5 = RegExp(/\b(\d{4})-(\d{2})-(\d{2})\b/, '');
result = re5[Symbol.match](text);
console.log(result);

result = text.match(re5);
console.log(result);

// add 'g' flag, only return the whole matching result string.
// but will scan whole text and return all matched.
let re6 = RegExp(/\b(\d{4})-(\d{2})-(\d{2})\b/, 'g');
result = re6[Symbol.match](text);
console.log(result);