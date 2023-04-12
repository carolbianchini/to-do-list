
const input = document.querySelector('form')
const list = document.querySelector('#list')
const inputList = document.querySelector("#input-list")
const addBtn = document.querySelector(".add-task")
var timeDisplay = document.getElementById("day");

function refreshTime() {
  var dateString = new Date().toLocaleString("pt-br", option);
  var formattedString = dateString.replace(", ", " - ");
  timeDisplay.innerHTML = formattedString;
}

const option = {
    year: 'numeric',
    month: ('numeric'),
    weekday: ('long'),
    day: 'numeric',
}
setInterval(refreshTime, 1000);

function addTask (task) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<input id="muda" type="checkbox" /><span id="span">${task}</span><button class="btn"></button>`
    list.appendChild(listItem);
}

addBtn.addEventListener('click', (e)=> {
    if (inputList.value == ''){
        alert("Insira alguma informação")
    }else {e.preventDefault()
        const inputList = document.querySelector("#input-list");
        task = inputList.value;
        addTask(task);
        inputList.value = ''
    }
})

list.addEventListener('click', (event)=>{
    if(event.target.className === 'btn'){
        const listItem = event.target.parentElement
        list.removeChild(listItem);
    }
})
