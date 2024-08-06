// Declare length and width
let length;
let width;

// Create a function named as calculationArea
function calculateArea() {
    // Fetch value from user input and assign accordingly
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    // Declare and initialize area 
    let area = length * width;

    // Display the result to the user interface
    document.getElementById('result').innerText = 'The area of the rectangle is: ${area}';
}