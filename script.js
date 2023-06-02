let position = 0;
const sliders = document.querySelector('#sliders');
const btn_next = document.querySelector('#next_slider');
const btn_prev = document.querySelector('#prev_slider');

btn_prev.style.visibility = 'hidden'

btn_next.addEventListener('click', ()=>{
    position += 488 ;
    sliders.style.left = -position + 'px'
    searchClickOnButton()
})

btn_prev.addEventListener('click', ()=>{
    position -= 488 ;
    sliders.style.left = -position + 'px'
    searchClickOnButton()
})

function searchClickOnButton(){
  	position !== 0 ? btn_prev.style.visibility = 'visible' : btn_prev.style.visibility = 'hidden'
    position === 976 ? btn_next.style.visibility = 'hidden' : btn_next.style.visibility = 'visible'
}