
const input = document.querySelector('form')
const list = document.querySelector('#list')
const inputList = document.querySelector("#input-list");

function addTask (task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /><span>${task}</span><button>Delete</button>`
    list.appendChild(listItem);
}

if(inputList === ''){
    alert('Digite algo para inserir em sua lista')
  } else{
    input.addEventListener('submit', (event) =>{
        event.preventDefault();
        const inputList = document.querySelector("#input-list");
        task = inputList.value;
        addTask(task);
        inputList.value = ""
     })
}


list.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
        const listItem = event.target.parentElement
        list.removeChild(listItem);
    }
})


/*const inputList = document.querySelector("#input-list");
if(!list.value){
    alert('Digite algo para inserir em sua lista')
}*/