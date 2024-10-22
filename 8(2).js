 
function add(a, b) {
    return a + b;
}

 
function subtract(a, b) {
    return a - b;
}

 
function multiply(a, b) {
    return a * b;
}

 
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero!';
    }
    return a / b;
}

 
function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    document.getElementById('addition').textContent = `Addition: ${add(num1, num2)}`;
    document.getElementById('subtraction').textContent = `Subtraction: ${subtract(num1, num2)}`;
    document.getElementById('multiplication').textContent = `Multiplication: ${multiply(num1, num2)}`;
    document.getElementById('division').textContent = `Division: ${divide(num1, num2)}`;
}