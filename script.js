const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');
const firstNumber = Number(prompt('Please enter the first number: '));
const secondNumber = Number(prompt('Please, enter the second number: '));
let result;
if (operator === '+'){
    result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`);
} else if (operator === '-'){
    result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`);
} else if (operator === "*"){
    result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`);
}else if(operator === "/"){
    result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`);
}else{
    alert(`Please try again`);
}