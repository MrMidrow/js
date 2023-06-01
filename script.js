const textArea = document.getElementById('text');

textArea.addEventListener('mouseover', (event)=>{
    const div = document.createElement("div");
    div.setAttribute('id','box')
    div.style.cssText = `
    margin-left: 20px;
    width: 50px;
    height: 50px;
    border: 2px solid red;
    background: black;`  
    //or div.classList.add('box')
    event.target.after(div)
})

textArea.addEventListener('mouseout', ()=>{
		document.getElementById('box').remove();
})