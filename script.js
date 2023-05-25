function getSum(){
    let result = 0;
   return function(number){
      result = result + number;
   return result;
 };
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));