'use strict';
const btnBuyItem = document.querySelector('#buyItem')
const formBuy = document.querySelector('#form_buy')

const quantity = document.querySelector('#quantity')
const worningText = document.querySelector('#worning')

btnBuyItem.addEventListener('click', ()=>{
    formBuy.style.visibility = formBuy.style.visibility !== 'visible' ? 'visible' : 'hidden'
});

formBuy.addEventListener('submit', (e) => {
    e.preventDefault();

    let formValues = new FormData(formBuy);
    let objForm = {}

    formValues.forEach((value, key) => {
    	if(key !== "textNode") {
      	objForm[key] = value;
      }
    });

		let isFormFieldsEmpty = Object.keys(objForm).some(item => !objForm[item]);

    if(!isFormFieldsEmpty){
        formBuy.style.display = 'none';
        addResaultOnPage();
    }else{
        worningText.textContent = 'please enter all fields';
        
        worningText.classList.add('worningStyle');
    }
});


function addResaultOnPage(){

    const resultWrapper = document.createElement('div')
    
    resultWrapper.classList.add('resultBuy');
    
    let resultSummaryText = document.createElement('p');
    resultSummaryText.textContent = `You get a ${document.querySelector('h3').textContent}, 
    ${document.querySelector('.descriptionItem').textContent}, 
    Your full name ${formBuy.first_name.value} ${formBuy.second_name.value},  
    City: ${formBuy.city.value},  
    Address new mail: ${formBuy.mail.value},  
    Method paid: ${formBuy.paid.value},  
    Amount: ${formBuy.how_much.value},  
    Comment: ${formBuy.textNode.value}`;
    resultWrapper.appendChild(resultSummaryText);
    document.querySelector('.get_address').append(resultWrapper);
};