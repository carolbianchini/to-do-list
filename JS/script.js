
const input = document.querySelector('form')
const list = document.querySelector('#list')
const inputList = document.querySelector("#input-list")
const addBtn = document.querySelector(".add-task")

function addTask (task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input type="checkbox" /><span>${task}</span><button>Delete</button>`
    list.appendChild(listItem);
}

addBtn.addEventListener('click', (e)=> {
    if (inputList.value == ''){
        alert("digite algo")
    }else {e.preventDefault()
        const inputList = document.querySelector("#input-list");
        task = inputList.value;
        addTask(task);
        inputList.value = ''
    }
})


list.addEventListener('click', (event)=>{
    if(event.target.tagName === 'BUTTON'){
        const listItem = event.target.parentElement
        list.removeChild(listItem);
    }
})