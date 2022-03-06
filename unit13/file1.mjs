import * as fs from "fs";

try {
    fs.accessSync("customer.json", fs.constants.R_OK | fs.constants.W_OK | fs.constants.X_OK);
    console.log("access R, W, X all OK");
} catch (err) {
    console.log(err);
}
let fd1;
let obj1;
try {
    fd1 = fs.openSync("./customer.json", "r", );
    // if no encoding parameter, will return byte buffer
    // with encoding, will return string of content.
    let content = fs.readFileSync(fd1, 'utf8');
    console.log(content);

    obj1 = JSON.parse(content);
    console.log(obj1);
} catch (err) {
    console.log(err);
} finally {
    fs.closeSync(fd1);
}
let fd2;
try {
    //if file exists already, it will be override.
    fd2 = fs.openSync('test.json', 'w');
    fs.writeFileSync(fd2, JSON.stringify(obj1));
} catch(err) {
    console.log(err);
} finally {
    fs.closeSync(fd2);
}

function get_content() {
    return `{
        "name": "John",
        "address": [
            "Unit 99, Building X, Jalan Abc, Kuala Lumpur",
            "No 66, Place Y, Jalan Def, City W, Selengor"
        ],
        "post_code": 55555,
        "order_history": 88,
        "current_order": {
            "amount": 102,
            "product": "laptop A",
            "purchase_date":"2022-03-01",
            "status": "On delivery",
            "deliver_addr": "address 1"
        }
    }`
}

let result;
console.time('direct return');
result = get_content();
console.timeEnd('direct return');
console.log(result)

console.time('read file sync');
result = fs.readFileSync('./customer.json', 'utf8','r');
console.timeEnd('read file sync');
console.log(result);
