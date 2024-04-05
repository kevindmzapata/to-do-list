document.addEventListener('DOMContentLoaded', function () {
    const addTaskBtn = document.getElementById('addTaskButton');
    const addTask = document.getElementById('addTask');
    const liTask = document.getElementById('liTask');

    function addNewTask(task) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');

        // Create span element to display task
        const taskText = document.createElement('div');
        taskText.textContent = task;
        taskText.classList.add('task-text');

        // Add check box button to mark task as done
        const checkBtn = document.createElement('input');
        checkBtn.type = 'checkbox';
        checkBtn.textContent = 'Done';
        checkBtn.classList.add('check-btn');
        checkBtn.onclick = function () {
            taskText.classList.toggle('checked');
        }

        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn')
        deleteBtn.onclick = function () {
            liTask.removeChild(li);
        }

        li.appendChild(checkBtn);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        liTask.appendChild(li);
    }

    addTaskBtn.addEventListener('click', function () {
        const task = addTask.value.trim();
        if (task) {
            addNewTask(task);
            addTask.value = '';
        }
        else {
            alert('Please enter a task');
        }
    });

    addTask.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const task = addTask.value.trim();
            if (task) {
                addNewTask(task);
                addTask.value = '';
            }
            else {
                alert('Please enter a task');
            }
        }
    });
});
