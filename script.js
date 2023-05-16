const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(numbers, keys){
	let password = '';
    for(let i = 0; i < numbers; i++){
       password +=	keys.charAt(Math.floor(Math.random()*keys.length))
    }
    return password
}

const key = generateKey(16, characters);
console.log(key); 