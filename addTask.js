
const form = document.querySelector('.form');
const input = document.querySelector('input');
const btnAdd = document.querySelector('.add');
const taskNumber = document.querySelector('h1 span')
const taskList = document.querySelector('.taskList ul');

const allTask = document.getElementsByClassName('task');
const toDoList = [];

removeTask = (e)=> {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    renderList();

    taskNumber.textContent = allTask.length;
}

renderList = ()=> {
    taskList.textContent = '';
    toDoList.forEach((element,key)=> {
        element.dataset.key = key;
        taskList.appendChild(element);
    })
}

const addTask = (e)=> {
    e.preventDefault();
    const inputValue = input.value;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = inputValue + '<button>Usuń</button>';

    if(!input.value) return alert('Wpisz opis zadania!')
    toDoList.push(newTask);
    renderList();
    input.value = '';

    taskNumber.textContent = allTask.length;

    newTask.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);

//Footer: time + date: 
setInterval(()=> {
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    document.querySelector('.time span').textContent = `${hours>9? hours : '0'+hours}:${minutes<10? '0'+minutes : minutes}:${seconds>9? seconds : '0'+seconds}`;
})