const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(numbers, key){
	let password = '';
    for(let i = 0; i < numbers; i++){
       password +=	key.charAt(Math.floor(Math.random()*key.length))
    }
    return password
}

const key = generateKey(16, characters);
console.log(key); 