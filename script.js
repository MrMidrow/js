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