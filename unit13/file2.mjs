import * as fs from "fs";

// define an arrow function, pass it to readFile as callback.
let obj1;
fs.readFile('./customer.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err);
        return;
    }
    console.log('File data:', jsonString);
    obj1 = JSON.parse(jsonString);
    console.log(obj1);
});
// must do all the process of data from file in the callback.
// if do it here, the readFile not finished and callback not called yet
// do not have any real data.

// because we only have the content ready after readFile callback done.
// so here using timeout to wait until have content.
// better way put these code into the readFile callback.
function test_reading() {
    if (obj1 == undefined) {
        // every 100ms to do a check if we get the data or not.
        setTimeout(test_reading, 100);
    } else {
        fs.writeFile('test2.json',JSON.stringify(obj1),{encoding:'utf8',flag:'w'}, (err)=>{
            if (err) {
                console.log(err);
            } else {
                console.log('save file finished');
            }
        });
    }   
}
setTimeout(test_reading, 100);

