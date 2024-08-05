// Function to get user input 
function getInput(){
    'use strict';
    // Get user number
    var userNumber = parseInt(document.getElementById('number').value);
    var message = document.getElementById('message');
    // Check with conditional statement to make sure the user entered a number within the scope (0 - 50)
    if (userNumber < 0){
        message.innerHTML = "Ups, your number is to small. Please enter again";
    }
    else if (userNumber > 50){
        message.innerHTML = "Ups, your number is to large, Please enter again";
    }
    else{
        return userNumber;
    }
}

// Factorial function
function factorial() {
    'use strict';
    // Get user input from 'getInput()' function
    var n = getInput();
    var result = 1;
    // Calculate factorial with 'for loop'
    for (var i = 1; i <= n; i++){
        result *= i;
    }
    // Conditional statement to give feedback to the user if user input the invalid number
    if (n < 0){
        document.getElementById('factorial').innerHTML = "Invalid";
    }
    else{
        document.getElementById('factorial').innerHTML = result;

    }
    return false;
}

// Square function
function square(){
    'use strict';
    // Get user input from 'getInput()' function
    var n = getInput();
    // Calculate square 
    var result = n * n;
    // Conditional statement to give feedback to the user if user input the invalid number
    if (n < 0){
        document.getElementById('square').innerHTML = "Invalid";
    }
    else{
        document.getElementById('square').innerHTML = result;
    }
    return false;
}
// Cube function
function cube(){
    'use strict';
    // Get user input from 'getInput()' function
    var n = getInput();
    // Calculate cube 
    var result = n * n * n;
    // Conditional statement to give feedback to the user if user input the invalid number   
    if (n < 0){
        document.getElementById('cube').innerHTML = "Invalid";
    }
    else{
        document.getElementById('cube').innerHTML = result;
    }
    return false;
}

// Function to refresh the page if want to create new calculation results
function refresh(){
    'use strict';
    // Refresh function
    window.location.reload();
}

// Init function
function init(){
    'use strict';
    // addEventListener to register an event listener on a DOM with a specify a function
    document.getElementById('calculate').addEventListener("click", factorial);
    document.getElementById('calculate').addEventListener("click", square);
    document.getElementById('calculate').addEventListener("click", cube);
    document.getElementById('refresh').addEventListener("click", refresh);
}

window.onload = init;
