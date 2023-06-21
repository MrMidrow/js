'use stric';
const btnBuyItem = document.querySelector('#buyItem')
const formBuy = document.querySelector('#form_buy')

const quantity = document.querySelector('#quantity')
const worningText = document.querySelector('#worning')
let user = []

worningText.style.cssText = `padding: 15px;
margin-top: 10px;
background: red;
color: white;
border: 0.5px solid grey`;

const makeUnic = (arr) => [...new Set(arr)];

btnBuyItem.addEventListener('click', ()=>{
    formBuy.style.visibility !== 'visible' ? formBuy.style.visibility = 'visible' : formBuy.style.visibility = 'hidden';
});

formBuy.addEventListener('submit', (e) => {
    e.preventDefault();

    let userValue = makeUnic(user);
    
    if(userValue.length >= 6){
        formBuy.style.display = 'none';
        addResaultOnPage();
    }else{
        worningText.textContent = 'please enter all strings';
    };
});

formBuy.addEventListener('input', (e) => {
    let value = e.target.value;
    let inputName = e.target.name;

    if(value.trim() !== ''){
        user.push(inputName);
    }
});

function addResaultOnPage(){
    const div = document.querySelector('div')
    div.style.cssText = `
    display: flex;
    margin-top: 10px;
    width: 320px;
    heigth: 150px;
    border: 2px solid black;
    background: grey`;
    let p = document.createElement('p');
    p.textContent = `You get a ${document.querySelector('h3').textContent}, 
    ${document.querySelector('.descriptionItem').textContent}, 
    Your full name ${formBuy.first_name.value} ${formBuy.second_name.value},  
    City: ${formBuy.city.value},  
    Address new mail: ${formBuy.mail.value},  
    Method paid: ${formBuy.paid.value},  
    Amount: ${formBuy.how_much.value},  
    Comment: ${formBuy.textNode.value}`;
    div.appendChild(p);
    document.querySelector('.get_address').append(div);
};