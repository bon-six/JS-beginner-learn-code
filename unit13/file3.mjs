import * as fsPromises from "fs/promises";

// await will wait for the promises fulfill and return the result.
let jsonString = await fsPromises.readFile('./customer.json', 'utf8');

console.log(jsonString);

let obj1 = JSON.parse(jsonString);
console.log(obj1);

await fsPromises.writeFile('tmp.json', JSON.stringify(obj1));