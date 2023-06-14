'use stric';
const btnBuyItem = document.querySelector('#buyItem')
const formBuy = document.querySelector('#form_buy')

//inputs
const first_name = document.querySelector('#firstName')
const second_name = document.querySelector('#secondName')
const optionCity = document.querySelector('#city')
const mail = document.querySelector('#mail');
const paidText = document.querySelector("#methodPaid");
const quantityInput = document.querySelector("#quantity");
const addProduct = document.querySelector('#added');
const subtractProduct = document.querySelector('#subtract');
const textNode = document.querySelector('#text_node')
//inputs


btnBuyItem.addEventListener('click', ()=>{
    formBuy.style.visibility !== 'visible' ? formBuy.style.visibility = 'visible' : formBuy.style.visibility = 'hidden'
});

addProduct.addEventListener('click', ()=>{
    quantityInput.value++;
});

subtractProduct.addEventListener('click', ()=>{
    quantityInput.value--;
});

function errorRedText(){
    paidText.style.color = 'red';
}

function normalizedColorText(){
    paidText.style.color = 'black'
};

function worning(){
    let div, p, text;
    div = document.querySelector('#worning')
    div.classList.add = 'worning'
    p = document.createElement('p')
    text = document.createTextNode('please enter all grap')
    p.appendChild(text)
    div.appendChild(p)
    formBuy.appendChild(div)
}

function formResoultValues(){
    const formValues = new FormData(formBuy)
    let objFormData = {}
    for(let newArr of formValues){
        objFormData[newArr[0]] = newArr[1]
    }
    return objFormData
}

function formValidator(formResoultValues){
    let newobj = formResoultValues
    console.log(newobj)
    for(let exelentObj of newobj){
        if(exelentObj[1] == '' || exelentObj[1] == null) {
            console.log(`pleas enter a ${exelentObj[0]}`)
            return false
        }
    }
}

formBuy.addEventListener('submit', (event)=>{
    event.preventDefault()
    // auditAndGetInputValue()
    let formObj = formResoultValues()
    addResaultOnPage(formObj,formValidator())
    if(addResaultOnPage() == false){
        console.log('bad boy')
    }


});

function auditInputValue(){
    if(!first_name.value){
        first_name.style.borderColor = 'red'
    }else{
        first_name.style.borderColor = ``;
    }

    if(!second_name.value){
        second_name.style.borderColor = 'red'
    }else{
        second_name.style.borderColor = ''
    }

    if(!optionCity.value){
        optionCity.style.borderColor = 'red'
    }else{
        optionCity.style.borderColor = ''
    }

    if(!mail.value){
        mail.style.borderColor = 'red'
    }else{
        mail.style.borderColor = '';
    }

    let postpaid = formBuy.postPay.checked;
    let nawpaid = formBuy.nawPay.checked;
    if(postpaid != true && nawpaid != true){
        paidText.style.color = 'red';
    }else if(postpaid == true){
        paidText.style.color = ''
    }else if(nawpaid == true){
        paidText.style.color = ''
    }

    if(quantityInput.value <= 0){
        document.querySelector('#amountText').style.color = 'red'
    }else{
        document.querySelector('#amountText').style.color = ''
    }

}

function addResaultOnPage(objValue, obj){

    if(obj == true){
        const div = document.createElement('div')
        div.style.cssText = `
        display: flex;
        width: 320px;
        heigth: 150px
        border: 2px solid black;
        background: grey`;
        let p = document.createElement('p')
        console.log(obj)
        let textNode = document.createTextNode(`${obj.first_name}, ${obj.second_name}, ${obj.city}, ${obj.mail}, ${obj.paid}, ${obj.how_much}, ${obj.textNode}`)
        p.appendChild(textNode)
        div.appendChild(p)
        document.body.append(div)
    }else{
        auditInputValue()
    }
    
}