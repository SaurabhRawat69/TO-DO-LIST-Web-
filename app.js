// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // Get DOM elements
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');

    // Event listener to add a new task
    addButton.addEventListener('click', function() {
        addTask();
    });

    // Allow pressing Enter to add a task
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Function to add a new task
    function addTask() {
        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            // Create a new to-do item
            const li = document.createElement('li');
            li.classList.add('todo-item');

            // Create header for task content
            const itemHeader = document.createElement('div');
            itemHeader.classList.add('todo-item-header');
            
            // Create task text span
            const span = document.createElement('span');
            span.textContent = taskText;

            // Create edit button
            const editBtn = document.createElement('button');
            editBtn.classList.add('edit-btn');
            editBtn.textContent = 'Edit';

            // Edit functionality
            editBtn.addEventListener('click', function() {
                const newTaskText = prompt("Edit your task:", span.textContent);
                if (newTaskText !== null) {
                    span.textContent = newTaskText.trim() || span.textContent;
                }
            });

            // Create delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.textContent = 'Delete';

            // Delete functionality
            deleteBtn.addEventListener('click', function() {
                li.remove();
            });

            // Toggle completed status when task text is clicked
            span.addEventListener('click', function() {
                li.classList.toggle('completed');
            });

            // Add current date and time
            const dateTime = document.createElement('div');
            dateTime.classList.add('date-time');
            const now = new Date();
            dateTime.textContent = `Added: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

            // Append elements to the list item
            itemHeader.appendChild(span);
            itemHeader.appendChild(editBtn);
            itemHeader.appendChild(deleteBtn);
            li.appendChild(itemHeader);
            li.appendChild(dateTime);
            todoList.appendChild(li);

            // Clear input field
            todoInput.value = '';
        }
    }
});

