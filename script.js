let position = 0;
const sliders = document.querySelector('#sliders')


document.querySelector('#next_pictures').addEventListener('click', ()=>{
        position += 488 ;
        if(position > 976){
            position = 0;
        }
        sliders.style.left = -position + 'px'
})

document.querySelector('#prev_pictures').addEventListener('click', ()=>{
    position -= 488 ;
    if(position < 0){
        position = 976;
    }
    sliders.style.left = -position + 'px'
})
