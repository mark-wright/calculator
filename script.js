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
	return a / b;
}

function power(a, b) {
	return Math.pow(a, b);
}

function operate(operator, a, b) {
    return operator(a,b);
}

function displayValue(input) {
    if (input == '.' && display.innerHTML.indexOf('.') == -1) {
        display.innerHTML += input;
    } else if (display.innerHTML.length < displaySizeMax) {
        display.innerHTML += +parseFloat(input).toFixed(Math.min(displaySizeMax-display.innerHTML.length,20));
    }
}

var display = document.getElementById('display');
var displaySizeMax = 28;
window.userInput = 0;
window.firstNumber = 0;
window.operator = 'blank';
window.secondNumber = 0;
window.result = 0;
oper = false;

function storeInput(value) {
    window.userInput = value;
    displayValue(userInput);
}

function clearDisplay() {
    document.getElementById('display').innerHTML = '';
}

function reset() {
    clearDisplay();
    window.firstNumber = 0;
    window.operator = 'blank';
    window.secondNumber = 0;
    oper = false;
}

function firstValue() {
    if (oper == false) {
        window.firstNumber = parseFloat(document.getElementById('display').innerHTML);
    }
}

function selectOperator(operator) {
    firstValue();
    window.operator = operator;
    oper = true;
    clearDisplay();
}

function submitOperation() {
    if (oper == true) {
        window.secondNumber = parseFloat(document.getElementById('display').innerHTML);
    }
    if (window.operator == divide && window.secondNumber == '0') {
        alert('HEY! You can\'t divide by zero! Please reset and start again.');
        reset();
    }
    window.result = operate(window.operator, firstNumber, secondNumber);
    window.firstNumber = window.result;
    document.getElementById('display').innerHTML = window.result;
}