
//*** callback fun is the fun that is passed as an argument to anothher fun ****/

// Define a function named greeting that takes two parameters: name and callback
function greeting(name, callback){
    // Print a greeting message to the console that includes the name parameter
    console.log('Hi'+' '+name);
    // Call the callback function
    callback();
}

// Define a function named callme that prints a message to the console
function callme(){
    console.log('Callback function');
}

// Call the greeting function with the arguments "Hritik" and callme
greeting("Hritik",callme);
