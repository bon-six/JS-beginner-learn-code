

function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}
  
function failureCallback(error) {
    console.error("Error generating audio file: " + error);
}
let audioSettings = '';
createAudioFileAsync(audioSettings, successCallback, failureCallback);

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);

doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
    console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);


async function foo() {
    try {
        const result = await doSomething();
        const newResult = await doSomethingElse(result);
        const finalResult = await doThirdThing(newResult);
        console.log(`Got the final result: ${finalResult}`);
    } catch(error) {
        failureCallback(error);
    }
}