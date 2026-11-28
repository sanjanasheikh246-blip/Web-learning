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

const container = document.getElementById('todo-container');
const addTodoButton = document.getElementById('add-todo-btn');
const todoDialog = document.getElementById('todo-dialog');
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const cancelBtn = document.getElementById('cancel-btn');
const viewDialog = document.getElementById('view-dialog');
const viewTodoText = document.getElementById('view-todo-text');
const closeViewBtn = document.getElementById('close-view-btn');

function renderTodoList() {
    // Create the list element
    const ul = document.createElement('ul');
    ul.className = 'todo-list';

    // Loop through the items and generate HTML
    my_todos.forEach((todoText, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.dataset.index = index;

        const id = `task-${index + 1}`;

        li.innerHTML = `
            <input type="checkbox" id="${id}">
            <label for="${id}"><span>${todoText}</span></label>
            <button type="button" class="delete-todo-btn" aria-label="Delete ${todoText}">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button type="button" class="view-todo-btn" aria-label="View ${todoText}">
                <i class="fa-solid fa-eye"></i>
            </button>
        `;

        ul.appendChild(li);
    });

    // Clear existing content and attach the new list
    container.innerHTML = '';
    container.appendChild(ul);
}

// View or delete item using event delegation on #todo-container
container.addEventListener('click', (event) => {
    const viewBtn = event.target.closest('.view-todo-btn');
    if (viewBtn) {
        const item = viewBtn.closest('.todo-item');
        const index = Number(item?.dataset.index);

        if (!Number.isNaN(index) && index >= 0 && index < my_todos.length) {
            viewTodoText.textContent = my_todos[index];
            viewDialog.showModal();
        }
        return;
    }

    const deleteBtn = event.target.closest('.delete-todo-btn');
    if (!deleteBtn) return;

    const item = deleteBtn.closest('.todo-item');
    const index = Number(item?.dataset.index);

    if (!Number.isNaN(index) && index >= 0 && index < my_todos.length) {
        my_todos.splice(index, 1);
        renderTodoList();
    }
});

// Close view dialog
closeViewBtn.addEventListener('click', () => {
    viewDialog.close();
});

viewDialog.addEventListener('click', (event) => {
    if (event.target === viewDialog) {
        viewDialog.close();
    }
});

// Render the items on page load
document.addEventListener('DOMContentLoaded', renderTodoList);

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
