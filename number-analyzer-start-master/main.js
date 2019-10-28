// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');
let numInput;

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);


// Event Function

function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);
    
    // Analyze Number and display results    
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);
}


// Analyze Functions
function getSign(){
    let numInput = Number(numEl.value);
    if (numInput > 0 ){
        return "positive";
    }
    else if (numInput = 0 ){
        return "zero";
    }
    else {
        return "negative";
    }
}



function evenOrOdd(arg1,arg2) {
    let numInput = Number(numEl.value);
    if (numInput % 2 == 0){
        return "even";
    }
    else {
        return "odd";
    }
}



let num = 1 
function multipleOf10(arg1,arg2) {
    let numInput = Number(numEl.value);
    num *= 10;
    num++;
    if (numInput == num) {
        return "True";
    }
    else {
        return "False";
    }
}



