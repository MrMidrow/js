let age = +prompt('What year of birth? 1990 or other');
let city = prompt('Where are you from?');
let sport = prompt('What sport do you do? Football, basketball or box?');

if (age !== NaN || age < 0 || age === 0 || age === ""){
    age = "Too bad you didn't want to enter yours age";
}else{
    age = `You age ${2023 - age} years old`;
}

if(typeof city === "string" || city !== null && city !== ""){
    switch(city.toLowerCase()){
        case "":
            break
        case "kiev" :
            city = (`You live in capital Ukraine Kiev`)
            break
        case "washington" :
            city = (`You live in capital USA Washington`)
            break
        case "london" :
            city = (`You live in capital great britan London`)
            break
        default:
            city = (`You live in city ${city}`)
            break
    }
}else{
    city = `Too bad you didn't want to enter yours city`;
}

if(sport !== null && sport !== ""){
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
            sport = "Too bad you didn't want to enter yours sport"
            break
    };
}else{
    sport = "Too bad you didn't want to enter yours sport";
}

alert(`${age}
${city}
${sport}`)
