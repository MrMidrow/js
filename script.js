//first home work calculator :D
const operator = prompt('Enter operator to perform the calculation ( either +, -, * or / ): ');
const firstnumber = +prompt('Please enter the first number: ');
const secondnumber = +prompt('Please, enter the second number: ');
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
const firstNumber = +prompt('Please send a first number');
const secondNumber = +prompt('Please send a second number');
const treeNumber = +prompt('Please send a tree number');
const answer = (firstNumber + secondNumber + treeNumber) / 3;
alert(`(${firstNumber} + ${secondNumber} + ${treeNumber}) / 3 = ${answer}`)