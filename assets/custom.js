let modal = document.querySelector('#p_modal_button3')
let quest = document.querySelectorAll('.survey_button')
let pmodal = document.querySelector('#p_modal3')
let answ = [];
for(let elem of quest){
    elem.addEventListener('click', function(){
        let res = elem.textContent;
        answ.push(res)
    })
}
modal.addEventListener('click', function(event){
    event.preventDefault();
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    pmodal.appendChild(ul);
    for(let i =0; i<answ.length; i++){
        let li = document.createElement('li')
        li.textContent = answ[i] 
        ul.appendChild(li);
    }
    console.log(ul) 
})

    let commentsFace = document.querySelector('.comments_face')
    let commentText = document.querySelector('#comment-text')
    let submit = document.querySelector('#btn-submit')
    let commentsList = document.querySelectorAll('.comments')
    let title = document.querySelector('#title')
    let commentsArr = []
    for(let comments of commentsList){
        commentsArr.push(comments.id);
    }
    submit.addEventListener('click', function(){
            let comment = document.createElement('div');
            comment.className = 'comments'
            let content = document.createElement('div')
            content.className = 'comment-content'
            comment.appendChild(content);
            let name = document.createElement('p')
            name.className='name'
            if(name.textContent ==0){
                name.textContent = 'Anonim'
            }
            content.appendChild(name);
            let text = document.createElement('p')
            text.textContent = commentText.value;
            content.appendChild(text);
            title.after(comment)
            commentsArr.push(comment);
            for (let i=0; i<commentsArr.length; i++){
                comment.id = 'comment'+i
        }
    })


