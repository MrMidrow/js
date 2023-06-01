let position = 0;
const sliders = document.querySelector('#sliders');
const btn_next = document.querySelector('#next_slider');
const btn_prev = document.querySelector('#prev_slider');

btn_next.addEventListener('click', ()=>{
    position += 488 ;
    if(position > 976){
        // position = 0;
    }
    sliders.style.left = -position + 'px'
})

btn_prev.addEventListener('click', ()=>{
    position -= 488 ;
    if(position < 0){
        // position = 976;
    }
    sliders.style.left = -position + 'px'
})
