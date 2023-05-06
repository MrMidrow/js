const age = +prompt('How old are you? Please, write in number');
const city = prompt('where are you from?');

if (age === NaN || age < 0 || age === 0){
    alert("Too bad you didn't want to enter yours age")
} 
if(city !== null){
    switch(city){
        case "Kiev" && "kiev" :
            alert(`Your age ${age}
You live in capital Ukraine ${city}`)
            break
        case "Washington" && "washington" :
            alert(`Your age ${age}
You live in capital USA ${city}`)
            break
        case "London" && "london" :
            alert(`Your age ${age}
You live in capital great britan ${city}`)
            break
        default:
            alert(`Your age ${age}
You live in city ${city}`)
            break
    }
}else{
    alert("Too bad you didn't want to enter yours city");
}

const sport = prompt('What sport do you do? Football, basketball or box?')
if(sport !== null){
    switch(sport){
        case 'Football' || 'football':
            alert('Сool! Do you want to be like Lionel Messi')
            break
        case 'basketball' || 'Basketball':
            alert('Сool! Do you want to be like Michael Jordan')
            break
        case 'box' || 'Box':
            alert('Сool! Do you want to be like Vladimir Klichko')
            break
        default:
            ("Too bad you didn't want to enter yours sport")
            break
    };
}



// age === NaN ? alert("Too bad you didn't want to enter yours age"): alert();
// city === null ? alert("Too bad you didn't want to enter yours city"):alert();
// sport === null ? alert("Too bad you didn't want to enter yours sport"): alert();
