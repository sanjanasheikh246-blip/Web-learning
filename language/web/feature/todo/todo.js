const my_todos = [
    'Have breakfast',
    'Read newspaper',
    'Check traffic',
    'Buy coffee',
    'Move to varsity',
    'Submit assignment',
    'Meet some friends',
    'Get back to home'
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