
function func1(data1){
    console.log(`func1, processing ${data1}`);
    return 'result from func1 process';
}
function func2(data2){
    console.log(`func2, processing ${data2}`);
    return 'result from func2 process';
}
function func3(data3){
    console.log(`func3, processing ${data3}`);
    return 'result from func3 process';
}

Promise.all([func1('initial data1'), func2('initial data2'), func3('initial data3')])
.then(([result1, result2, result3]) => { console.log(`${result1}\n${result2}\n${result3}`)});

[func1, func2, func3].reduce((p,n)=>p.then(n),Promise.resolve('Sequential Initial data'));

let result = 'Initial data XXX';
// when func1, func2, func3 is promise / async function.
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* use last result (i.e. result3) */


Promise.race([func1('initial data1'), func2('initial data2'), func3('initial data3')])
.then((result) => { console.log(`one of them finish. ${result}`)});


Promise.any([func1('initial data1'), func2('initial data2'), func3('initial data3')])
.then((result) => { console.log(`one of them finish. ${result}`)});