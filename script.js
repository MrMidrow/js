'use strict'
const form = document.querySelector('#searchPostId');
const commentsBtn = document.querySelector('#searchComment');
const blockComments = document.querySelector('#comment');
const userId = document.querySelector('.post');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = +form.Post.value;
    const comment_block = document.querySelector('.comment_block');
    if(comment_block !== null) comment_block.remove(); // changed remove comment block

    commentsBtn.removeAttribute('disabled');
    !id ? console.log('Error') : getPost(id);
})

async function getPost(id) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try{
        const response = await fetch(url);
        const requestData = await response.json(); //changed requestData = await(await fetch(url)).json;
        const post = requestData[id - 1];
        if(id > requestData.length){
            throw 'Введено не коректное число';
        }else{
            renderingPost(post);
        }
    }catch(error){
        console.error(error);
    }
}

function renderingPost(data) {
    userId.setAttribute('data-id', `${data.userId}`);
    document.querySelector('.userName').textContent = `${data.userId}`;
    document.querySelector('.title').textContent = `${data.title}`;
    document.querySelector('.body').textContent = `${data.body}`;
    commentsBtn.style.visibility = 'visible';
}

commentsBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const id = userId.getAttribute('data-id');
    const comment_block = document.createElement('div');
    comment_block.setAttribute('class', 'comment_block');
    blockComments.appendChild(comment_block);
    getUserComment(id);
    blockComments.style.visibility = 'visible';
    commentsBtn.setAttribute('disabled', 'true');
})

async function getUserComment(id){
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    try{
        const data = await (await fetch(url)).json();
        data.forEach((e)=>{
            if(!document.querySelector(`.item-${e.id}`)) createItemComment(e);
        })
    }catch(error){
        console.log(error);
    }
}

function createItemComment(e){
    const comment_block = document.querySelector('.comment_block');

    const item = document.createElement('div');
    item.classList.add(`item-${e.id}`);

    const name = document.createElement('h3');
    name.classList.add('name');
    name.textContent = `${e.postId}`;

    const mail = document.createElement('a');
    mail.classList.add('mail');
    mail.setAttribute('href', e.mail);
    mail.textContent = `${e.email}`;

    const body = document.createElement('p');
    body.classList.add('bodyComment');
    body.textContent = `${e.body}`;

    item.appendChild(name);
    item.appendChild(mail);
    item.appendChild(body);
    comment_block.appendChild(item);
}