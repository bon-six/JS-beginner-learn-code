
let i = 0;
let str_1 = 'Book';

Label_1:
for (x of str_1) {
    i = 0;
    Label_2:
    while (i<5) {
        if (i==3) {
            i++
            continue
            //continue Label_1
            //break;
            //break Label_1
        }
        console.log('x=', x, 'i=', i);
        i++;
    }
}

console.log('Finished');