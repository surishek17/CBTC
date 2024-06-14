document.addEventListener('DOMContentLoaded', (event) => {
    // Event listener for the Add Task button
    document.getElementById('addTaskButton').addEventListener('click', addTask);

    // Function to add a new task
    function addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskList = document.getElementById('taskList');
            const newTask = document.createElement('li');
            newTask.className = 'list-group-item fade-in';

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const timestamp = document.createElement('span');
            timestamp.className = 'timestamp';
            timestamp.textContent = `Added: ${new Date().toLocaleString()}`;

            const completeButton = document.createElement('button');
            completeButton.className = 'btn btn-success btn-sm';
            completeButton.textContent = 'Complete';
            // Event listener for the Complete button
            completeButton.addEventListener('click', () => markTaskComplete(newTask, taskText));

            newTask.appendChild(taskContent);
            newTask.appendChild(timestamp);
            newTask.appendChild(completeButton);

            taskList.appendChild(newTask);
            taskInput.value = '';
        }
    }

    // Function to mark a task as complete
    function markTaskComplete(taskElement, taskText) {
        taskElement.classList.add('slide-out');
        // Wait for the slide-out animation to finish
        taskElement.addEventListener('animationend', () => {
            const completedTaskList = document.getElementById('completedTaskList');
            const completedTask = document.createElement('li');
            completedTask.className = 'list-group-item fade-in';

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;

            const timestamp = document.createElement('span');
            timestamp.className = 'timestamp';
            timestamp.textContent = `Completed: ${new Date().toLocaleString()}`;

            completedTask.appendChild(taskContent);
            completedTask.appendChild(timestamp);

            completedTaskList.appendChild(completedTask);
            taskElement.remove();
        });
    }
});

