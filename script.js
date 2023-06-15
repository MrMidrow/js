const form = document.querySelector('#form')
const mail = document.querySelector('#email')
const phone = document.querySelector('#phone')
const password = document.querySelector('#password')
const fullName = document.querySelector('#fullName')

const mailSpan = document.querySelector('#mailSpan')
const passSpan = document.querySelector('#passSpan')
const phoneSpan = document.querySelector('#phoneSpan')
const nameSpan = document.querySelector('#nameSpan')

const textNodeValid = document.createTextNode('valid')
const textNodeNoValid	= document.createTextNode('Novalid')
document.querySelector('#login').setAttribute('disabled', '')


form.addEventListener('submit', (event)=>{
    event.preventDefault()

    sortForm()
    let validValue = validateForm()
    createPreload(validValue)
})

function validateForm(){
	const func = new FormData(form);
	for(const obj of func){
    if(obj[1]==''||obj[1]==null){
        console.log('fix bag')
    	return false
    }
  }
  return true
}

function createPreload(index){
  if(index == true){
    let newDiv= document.createElement('div')
    form.style.visibility = 'hidden';
    newDiv.classList.add('preloader')
    document.body.append(newDiv)
    		setTimeout(()=>{
        window.location.assign('/profile.html')
    },2000)
  }

}

function sortForm(){
    const valueForm = new FormData(form);
    let formObject = {}

    for(const value of valueForm){
        formObject[value[0]] = value[1]
    }
	return formObject
}

let mailValid = function(e){
    e.preventDefault()
    let target = e.target.value
    let patternMail = /^\w{5,}\@\w+\.\w{2,3}$/;
    let isValidMail = patternMail.test(target)
    if(isValidMail){
        mailSpan.textContent = 'valid'
        return true
    }else{
        mailSpan.textContent = 'No valid'
        return false
    }
}
  
let phoneValid = function(e){
    e.preventDefault()
    let target = e.target.value;
    let patternPhone = /^\+\d{1,3}\(+\d{2,}\)+\d{3,}\-\d{2,}\-\d{2,}$/;
    let isValidPhone = patternPhone.test(target);
        if(isValidPhone){
            phoneSpan.textContent = 'valid'
        }else{
            phoneSpan.textContent = 'No valid'
        }
}

let passwordValid = function (e){
    e.preventDefault()
    let target = e.target.value
    let patternPassword = /^[A-Za-z]{1,}\d{1,}\w$/;
    let isValidPassword = patternPassword.test(target)
     if(isValidPassword){
         passSpan.textContent = 'valid'
     }else{
         passSpan.textContent = 'No valid'
     }
}
  
let isFullName = function(e){
    let target = e.target.value
    let patternFullName = /^[A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,}/;
    let isValidName = patternFullName.test(target)
    if(isValidName && target != ""){
        nameSpan.textContent = 'valid'
        return true
    }else{
        nameSpan.textContent = 'No valid'
    }
  }

form.addEventListener('input', (e)=>{
    e.preventDefault()
    let target = e.target.name
    let nameOk, passwordOk, phoneOk, mailOk;
    if(target == 'fullName'){nameOk = isFullName(e)}
    if(target == 'password'){passwordOk = passwordValid(e)}
    if(target == 'phone'){phoneOk = phoneValid(e)}
    if(target == 'mail') {mailOk = mailValid(e)}
})

