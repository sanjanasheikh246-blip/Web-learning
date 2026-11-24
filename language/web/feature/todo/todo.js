const my_todos = [
    'Have breakfast',
    'Read newspaper',
    'Check traffic',
    'Buy coffee',
    'Move to varsity',
    'Submit assignment',
    'Meet some friends',
    'Get back to home',
    'Get back to sleep'
];



function renderTodoList() {
    const container = document.getElementById('todo-container');
    
    // Create the list element
    const ul = document.createElement('ul');
    ul.className = 'todo-list';

    // Loop through the items and generate HTML
    my_todos.forEach((todoText, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';

        const id = `task-${index + 1}`;

        li.innerHTML = `
            <input type="checkbox" id="${id}">
            <label for="${id}"><span>${todoText}</span></label>
        `;

        ul.appendChild(li);
    });

    // Clear existing content and attach the new list
    container.innerHTML = '';
    container.appendChild(ul);
}

// Render the items on page load
document.addEventListener('DOMContentLoaded', renderTodoList);

// related to add a new todo

const addTodoButton = document.getElementById('add-todo-btn');
const todoDialog = document.getElementById('todo-dialog');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const cancelBtn = document.getElementById('cancel-btn');
const todoList = document.getElementById('todo-list');

// Open dialog
addTodoButton.addEventListener('click', () => {
    todoDialog.showModal();
    todoInput.focus();
});

// Close dialog on Cancel
cancelBtn.addEventListener('click', () => {
    todoForm.reset();
    todoDialog.close();
});

// Close dialog when clicking outside the modal box
todoDialog.addEventListener('click', (event) => {
    if (event.target === todoDialog) {
        todoForm.reset();
        todoDialog.close();
    }
});

// Handle form submission (supports Enter key and Add button)
todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskText = todoInput.value.trim();

    if (taskText) {
        my_todos.unshift(taskText);
        renderTodoList();
    }

    todoForm.reset();
    todoDialog.close();
});