// Function that retreievs numerical values enetered by 
// the user from HTML input fields
function performOperation() {
// Get user input from input fields
let num1 = parseInt(document.getElementById('input1').value);
let num2 = parseInt(document.getElementById('input2').value);
// Check if inputs are valid numbers
if (!isNaN(num1) && !isNaN(num2)) {
// Perform the operation
                let result = multiply(num1, num2);

                // Display the result
                displayResult(result);
            } else {
                displayResult('Please enter valid numbers');
            }
}

// Function that includes a debugger statement to pause
// code execution at this point for debugging purposes
function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

// Function that displays the result of the multiplication
// or an error message in a designated paragraph lement on
// the webpage
function displayResult(result) {
    // Display the result in the paragraph element
        const resultElement = document.getElementById('result');
        resultElement.textContent = `The result is: ${result}`;
}
    