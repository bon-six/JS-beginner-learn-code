

const wrap_long_work = (long_work_func) => new Promise(function(resolve,reject){
    let workDone = long_work_func();
    // if work finish success should workDone = true;
    // if something happen and work cannot finish should workDonw = false
    if(workDone){
       //invoke resolve function passed
       resolve('success promise completed')
    }else{
       reject('ERROR , work could not be completed')
    }
})


const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function do_first(data) {
    console.log(`First Process. taking data ${data}`);
    return 'First done.';
}

function err_process(last_result) {
    console.log(`Something Wrong happened. last result ${last_result}`);
    return 'Err result';
}

wait(3000).then(do_first).catch(err_process);

const wait2 = (ms, data) => new Promise(resolve => {setTimeout(()=>resolve(data),ms)});
wait2(3000,'initial data').then(do_first).catch(err_process);


function do_first2(data) {
    console.log(`First2 Process. taking data ${data}`);
    throw 500;
}

wait2(3000,'initial data').then(do_first2).catch(err_process);

const wait3 = (ms, prepare_func) => new Promise(resolve=>{setTimeout(()=>resolve(prepare_func()),ms)});
function prepare_func() {
    return 'initial data prepared';
}
wait3(3000,prepare_func).then(do_first2).catch(err_process);

