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


// mail.addEventListener('input', (e)=>{
//     e.preventDefault()
//     let target = e.target.value
//     let patternMail = /^\w{5,}\@\w+\.\w{2,3}$/;
//     let isValidMail = patternMail.test(target)
//     if(isValidMail){
//         mailSpan.textContent = 'valid'
//         return true
//     }else{
//         mailSpan.textContent = 'No valid'
//         return false
//     }
// })
  
// phone.addEventListener('input', (e)=>{
//     e.preventDefault()
//     let target = e.target.value;
//     let patternPhone = /^\+\d{1,3}\(+\d{2,}\)+\d{3,}\-\d{2,}\-\d{2,}$/;
//     let isValidPhone = patternPhone.test(target);
//         if(isValidPhone){
//             phoneSpan.textContent = 'valid'
//         }else{
//             phoneSpan.textContent = 'No valid'
//         }
// })
// password.addEventListener('input', (e)=>{
//          e.preventDefault()
//          let target = e.target.value
//          let patternPassword = /^[A-Za-z]{1,}\d{1,}\w$/;
//          let isValidPassword = patternPassword.test(target)
//           if(isValidPassword){
//               passSpan.textContent = 'valid'
//           }else{
//               passSpan.textContent = 'No valid'
//           }
// })
  
// fullName.addEventListener('input', (e)=>{
//     e.preventDefault()
//     let target = e.target.value
//     let patternFullName = /^[A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,}/;
//     let isValidName = patternMail.test(target)
//     if(isValidName){
//         nameSpan.textContent = 'valid'
//     }else{
//         nameSpan.textContent = 'No valid'
//     }
//   })

let keys = form.addEventListener('input', (e)=>{
    e.preventDefault()
    
    let target = e.target.value
    let patternMail = /^\w{5,}\@\w+\.\w{2,3}$/;
    let patternPassword = /^[A-Za-z]{1,}\d{1,}\w$/;
    let patternPhone = /^\+\d{1,3}\(+\d{2,}\)+\d{3,}\-\d{2,}\-\d{2,}$/;
    let patternFullName = /^[A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,}$/;

    let isValidMail = patternMail.test(target)
    let isValidFullName = patternPassword.test(target)
    let isValidPassword = patternPhone.test(target)
    let isValidPhone = patternFullName.test(target)

    isValidPassword ? passSpan.textContent = 'valid' : passSpan.textContent = 'NOvalid'
    isValidMail ? mailSpan.textContent = 'valid' : mailSpan.textContent = 'NOvalid'
    isValidPhone ? phoneSpan.textContent = 'valid' : phoneSpan.textContent = 'NOvalid'
    isValidFullName ? nameSpan.textContent = 'valid' : nameSpan.textContent = 'NOvalid'
})
console.log(keys)