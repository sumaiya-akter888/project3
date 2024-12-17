
document.getElementById('comment-btn').addEventListener('click',function(){
   
const fieldInput = document.getElementById('field-input');
const fieldText = fieldInput.value;

const commentContent = document.getElementById('comment-content');
const p = document.createElement('p');
document.body.style.color='white';
p.innerText = fieldText;
commentContent.appendChild(p);

fieldInput.value = '';

})
