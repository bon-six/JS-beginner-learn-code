
try {  
    // Code to run  
} catch ( e ) {  
    // Code to run if an exception occurs
} finally {  
    // Code that is always executed regardless of  
    // an exception occurring  
    // this block is optional. 
    // if only have try {} and catch () {}, no finally block, is also valid
}  



try {
    myroutine(); // may throw three types of exceptions
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
        // statements to handle any unspecified exceptions
        logMyErrors(e); // pass exception object to error handler
    }
}


try {
    myRoutine();
} catch (e) {
    if (e instanceof RangeError) {
        // statements to handle this very common expected error
    } else {
        throw e;  // re-throw the error unchanged
    }
}

// this function use JSON.parse to try the text which needs to check
// and then make judgement if it is valid JSON or not.
function isValidJSON(text) {
    try {
        JSON.parse(text);
        return true;
    } catch {
        return false;
    }
}