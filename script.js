const years = +prompt('What year of birth? 1990 or other');
let city = prompt('Where are you from?');
let sport = prompt('What sport do you do? Football, basketball or box?');
let age;
if (!years){
    age = "Too bad you didn't want to enter yours year of birth"
}else if(years > 1900 && years < 2023){
    age =`You years old ${2023 - years}`
}else{
    age = `Incorrect years of birth!`
}

if(!city){
    city = `Too bad you didn't want to enter yours city`
}else {
    switch(city.toLowerCase()){
        case "kiev" :
            city = `You live in capital Ukraine Kiev`
            break
        case "washington" :
            city = `You live in capital USA Washington`
            break
        case "london" :
            city = `You live in capital great britan London`
            break
        default:
            city = `You live in city ${city}`
            break
    }
}

if(!sport){
    sport = "Too bad you didn't want to enter yours sport";
}else{
    switch(sport.toLowerCase()){
        case 'football':
            sport = 'Сool! Do you want to be like Lionel Messi';
            break
        case 'basketball':
            sport = 'Сool! Do you want to be like Michael Jordan';
            break
        case 'box':
            sport = 'Сool! Do you want to be like Vladimir Klichko';
            break
        default:
            sport = `Cool! Your sport ${sport}`
            break
    };
}

alert(`${age}
${city}
${sport}`)