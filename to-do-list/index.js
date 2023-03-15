
let deleteMe = document.getElementById('delete');
let to_do_tasks = document.getElementById('to_do_tasks');
let text = document.querySelector('input');
let addMe = document.getElementById('add');
let listing = document.querySelector('li');
let num = 0;    


// add to your list
addMe.addEventListener('mousedown', function (){
const paragraph = document.createElement('li');
const addParagraph = document.createTextNode(`${num}.  `+ text.value);

if (text.value != '')
{
paragraph.appendChild(addParagraph)
to_do_tasks.appendChild(paragraph)
document.getElementById('color3').innerText = "Dont forget to complete these task(s)"
}
num ++
}
);

// every 10 seconds the text value will reset to nothing
setInterval(function(){
text.value = ''
},15000)
;


// remove what you just typed
function remover(){
return text.value = '';  
};

deleteMe.onclick = remover;



// timer to removeChild (every 15 seconds)
to_do_tasks.addEventListener('mousedown', function(){
if (to_do_tasks !== ''){
const li = document.querySelectorAll('li')
to_do_tasks.firstChild.remove(li)
}
num=0
})


setInterval(() => {
if (to_do_tasks.innerHTML == ''){
document.getElementById('color3').innerText = "you have no task(s) to do."
}
}, 1000);
// this was just to make sure no errors/bugs occured
console.log ('hello world;');