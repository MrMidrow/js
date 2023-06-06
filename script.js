const formLogIn = document.querySelector('#form')

formLogIn.addEventListener('submit', (event)=>{
    event.preventDefault()

    sortForm()//or
    // console.log('user name',form.userName.value)
    // console.log('password',form.password.value)

    createPreload()
    setTimeout(()=>{
        window.location.assign('/profile.html')
    },2000)
})

function createPreload(){
    let newDiv= document.createElement('div')
    formLogIn.style.visibility = 'hidden';
    newDiv.classList.add('preloader')
    document.body.append(newDiv)
}

function sortForm(){
    const valueForm = new FormData(form);
    let formObject = {}

    for(const value of valueForm){
        formObject[value[0]] = value[1]
    }

    console.log(formObject)
}