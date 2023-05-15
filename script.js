const number = +prompt('enter quantity obj');
const massage = [];
//step 1
if(!number){
	alert('Please enter Number not a string')
}else{
	for(let i = 1; i <= number; i++){
   massage.push(prompt('send a massage: '))
  }
}
alert(massage)
//step 2
massage.sort();
alert(massage)
//step 3
if(massage.length <= 2){
    alert('More than 2 elements are required to remove elements from an array')
}else{
    massage.splice(1, 3)
    alert(sortMassage)
}