let tasks = [];

let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTask);

function addTask() {

    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task);

    displayTasks();

    input.value = "";
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function displayTasks() {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {

        list.innerHTML += `
            <li>
                ${tasks[i]}
                <button class="remove-btn" onclick="removeTask(${i})">
                    Remove
                </button>
            </li>
        `;
    }
}