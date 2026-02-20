let todos = [];
let filtered = false;

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const dateInput = document.getElementById('todo-date');
const list = document.getElementById('todo-list');
const clearBtn = document.getElementById('clear-btn');
const filterBtn = document.getElementById('filter-btn');


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(input.value.trim() === '' || dateInput.value === ''){
        alert('Input dan tanggal wajib diisi');
        return;
    }

    const newTodo = {
        text: input.value,
        date: dateInput.value
    };

    todos.push(newTodo);

    // INI YANG KAMU CARI
    console.log("TODOS:", todos);

    input.value = '';
    dateInput.value = '';

    renderTodos();
});


function renderTodos(data = todos){

    list.innerHTML = '';

    if(data.length === 0){
        list.innerHTML = '<li>No todos available</li>';
        return;
    }

    data.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.text}</span>
            <span>${todo.date}</span>
        `;
        list.appendChild(li);
    });
}


clearBtn.addEventListener('click', function(){
    todos = [];
    console.log("AFTER CLEAR:", todos);
    renderTodos();
});


filterBtn.addEventListener('click', function(){

    if(filtered){
        renderTodos();
        filtered = false;
        return;
    }

    const today = new Date().toISOString().split('T')[0];

    const result = todos.filter(todo => todo.date >= today);

    console.log("FILTER RESULT:", result);

    renderTodos(result);
    filtered = true;
});