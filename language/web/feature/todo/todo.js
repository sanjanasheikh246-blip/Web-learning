fetch('todo_list.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('todo-container').innerHTML = data;
            })
            .catch(error => console.error('Error loading todo list:', error));