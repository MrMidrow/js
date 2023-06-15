const form = document.querySelector('#form')
let count = false;
let user = {}
form.addEventListener('submit', (event) => {
    event.preventDefault()
    sortForm()
    console.log(sortForm())
    if(!count){
        console.log('Enter all yard')
    }else{
        console.log('Cool')
    }

})

function createPreload(index) {
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

function sortForm() {
    const valueForm = new FormData(form);
    let formObject = {}

    for(const value of valueForm){
        formObject[value[0]] = value[1]
    }
	return formObject
}


let validatorMap = {
    userName: {
        validator: /^[A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]{1,} [A-Z]{1,}[a-z]+$/,
        message: "имя пользователя может содержать только латинские символы",
    },
    password: {
        validator: /^[A-Za-z]{1,}\d{1,}\w+$/,
        message: "Пароль должен быть минимум 8 символов и содержать буквы верхнего нижнего рестра, а так же как минимум один спецсимвол",
    },
    mail: {
        validator: /^\w{5,}\@\w+\.\w{2,3}$/,
        message: "электронная почта введена неверно",
    },
    phone: {
        validator: /^\+\d{1,3}\(+\d{2,}\)+\d{3,}\-\d{2,}\-\d{2,}$/,
        message: "введен неправильный номер телефона",
    }
}

form.addEventListener('input', (e) => {
    e.preventDefault()
    let value = e.target.value
    let errorSpan = e.target.nextElementSibling;
    let inputName = e.target.name;
    
    if(value.trim() === "") {
     errorSpan.textContent = "Поле не может быть пустым";
    } else {
     let isValidInput = validatorMap[inputName] && validatorMap[inputName].validator.test(value);
        if(!isValidInput) {
            errorSpan.textContent = validatorMap[inputName].message;
        }else{
            user[value[0]] = value[1]
            errorSpan.textContent = 'Супер !'
        }
    }
})
