function getOperator(message) {
        let answer = '';
        do {
                answer = prompt(message);
                if (!errorOperation(answer)) {
                        alert(`This ${answer} is not a valid arithmetic operation!`);
                }
        } while (!errorOperation(answer));
        
                return answer;
}

function errorOperation(operator) {  
        return (
                operator === "+" ||
                operator === "-" || 
                operator === "*" || 
                operator === "/" 
        );
}

function getNumber(message) {
        let result = prompt(message, 2);
        while (
                isNumber(result) 
                ) {
                if (isNumber(result)) {
                        alert(`This ${result} is not a number!`);
                } 
                result = prompt(message);
        }
        return +result;
}

function isNumber(number) {
    return (isNaN(number));
}

function getOperand(message) {
        let number = '';
        do {
                number = prompt(message);
                if (isNumber(number)) {
                        alert(`This ${number} is not a number!`);
                } 
        } while (isNumber(number));
        return +number;
}

let mainOperator = getOperator('Enter please the operation you want: (+ - / *)');

let numberOperands = getNumber('How many operands?');

switch (mainOperator) {
        case '+':
            foldedOperation = function(a, b) {
                return sum(a, b);
                }
                break;
        case '-':
            foldedOperation = function(a, b) {
                return sub(a, b);
                }
                break;
        case '*':
            foldedOperation = function(a, b) {
                return multiplication(a, b);
                }
                break;
        case '/':
            foldedOperation = function(a, b) {
                return divide(a, b);
                }
                break;
}

function sum(a, b) {
        return a+b;
}

function sub(a, b) { 
        return a-b;
}

function divide(a, b) {
        return a/b;
}

function multiplication(a, b) { 
        return a*b;
}

let putNumber;

let testResult;

let resultCalculation;

for (n = 0; n < numberOperands; n++) {
    putNumber = getOperand('Enter the number');
        if (n === 0) {
            resultCalculation = putNumber;
            testResult = putNumber; 
        } else {
            resultCalculation = foldedOperation(resultCalculation, putNumber);
            testResult += `${mainOperator} ${putNumber}`; 
        }
        
}

alert(`${testResult} = ${resultCalculation}`);
