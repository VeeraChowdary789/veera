let taskStack = [];
const taskNameInput = document.getElementById('task_Name');
const addTaskButton = document.getElementById('add_Task');
const undoTaskButton = document.getElementById('undo_Task');
const taskListTextArea = document.getElementById('task_List');

function displayTaskStack() {
    taskListTextArea.value = taskStack.join('\n');
}

addTaskButton.addEventListener('click', () => {
    const taskName = taskNameInput.value.trim();
    if (taskName) {
        taskStack.push(taskName);
        displayTaskStack();
        taskNameInput.value = ''; 
    } else {
        alert('Please enter a task');
    }
});

undoTaskButton.addEventListener('click', () => {
    if (taskStack.length > 0) {
        taskStack.pop();
        displayTaskStack();
    } else {
        alert('No tasks!');
    }
});

displayTaskStack();
