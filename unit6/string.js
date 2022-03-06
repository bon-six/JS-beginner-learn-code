let s1 = 'abc';
console.log(typeof s1);

let s2 = new String('xyz');
console.log(typeof s2);
console.log(s2 instanceof String);

console.log(s2.charAt(1));
console.log(s2[1]);

console.log(s1.charAt(1) == 'b');
console.log(s2.charAt(2) == 'z');

console.log(s2.slice(1,2));
console.log(s2.slice(1));

console.log(s2.startsWith('a'));
console.log(s1.startsWith('a'));

let name = 'Tom';
console.log(`Hello, ${name}`);
let name2 = 'Hanks';
console.log(`Hello, ${name+' '+name2}`);
let func = function() {return 'Hello world.'};
console.log(`
message is:
${func()}`);


let s3 = String.raw `abc, ${name} \n with ${name2}`;
console.log(s3);

function my_tag_func (literals,...values) {
    let result = 'Literals are:\n';
    for (let c of literals) {
        result += c;
        result += '\n';
    }
    result += 'Values are:\n';
    for (let c of values) {
        result += c;
        result += '\n';
    }
    result += 'Done!';
    return result;
}
console.log(my_tag_func `Hello, This is ${name} from ${name2}. Nice to meet you.`);