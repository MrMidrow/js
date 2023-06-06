const backList = document.querySelector('#back')
console.log(window.screen.height)
console.log(window.screen.width)

backList.addEventListener('click', ()=>{
    window.history.back()
})