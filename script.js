//first home work calculator :D
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');
const firstnumber = Number(prompt('Please enter the first number: '));
const secondnumber = Number(prompt('Please, enter the second number: '));
let result;
if (operator === '+'){
    result = firstnumber + secondnumber;
    alert(`${firstnumber} + ${secondnumber} = ${result}`);
} else if (operator === '-'){
    result = firstnumber - secondnumber;
    alert(`${firstnumber} - ${secondnumber} = ${result}`);
} else if (operator === "*"){
    result = firstnumber * secondnumber;
    alert(`${firstnumber} * ${secondnumber} = ${result}`);
}else if(operator === "/"){
    result = firstnumber / secondnumber;
    alert(`${firstnumber} / ${secondnumber} = ${result}`);
}else{
    alert(`Please try again`);
}

//second home work average arithmetic
const firstNumber = Number(prompt('Please send a first number'));
const secondNumber = Number(prompt('Please send a second number'));
const treeNumber = Number(prompt('Please send a tree number'));
const answer = (firstNumber + secondNumber + treeNumber) / 3;
alert(`(${firstNumber} + ${secondNumber} + ${treeNumber}) / 3 = ${answer}`)