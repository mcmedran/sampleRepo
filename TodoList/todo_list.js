// Retrieve HTML element with specific ID & assign to const
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

// function takes value enetered by user, trimming trailing whitespace
// and then display entered todo tasks
function addTask() {
    const taskText = taskInput.ariaValueMax.trim();
    if (taskText != "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
                    <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);

    });
}

// Function toggles the completion status of a specific 
// task in the tasks array based on the provided index
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function filters the task array, which has the list of 
// tasks entered by users
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}