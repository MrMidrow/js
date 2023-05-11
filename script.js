// task 1


for(let i = 20; i <= 30; i+=0.5){
    console.log(i)
};

// let i = 20;
// while(i <= 30){
//     console.log(i)
//     i +=0.5
// }

// task 2

const dollar = 27;
let table = {};
for(let i = 10; i <= 100; i+=10){
        if(!table[i]) table[i] = [];
        table[i].push(i*dollar)
};
console.log(table);

// task 3

const n = 10;
let string = "";
for(let x = 2; x <= 100; x++){
    if(x**2 > n)break;
    string += `${x} `
}
console.log(string)

// task 4

const s = 13;
for( let i = 2; i <= s - 1; i++){
    if((s % i == 0)){
        alert("composite number")
        break
    }else{
        alert('The prime numbers')
        break
    }
}

// task 5

const b = 9;
if(b % 3 === 0){
    for(i = 2; i <= Math.sqrt(b); i++){
        if(3**i == b){
            alert(`3**${i}`);
            break;
        };
    };
}else{
    alert("won't work")
}