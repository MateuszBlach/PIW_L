function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.addEventListener("click", toggleTask);
        document.getElementById("taskList").appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Wpisz treść zadania!");
    }
}

function toggleTask() {
    var date = new Date().toLocaleString();
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
        this.style.textDecoration = "";
        this.dataset.date = "";
    } else {
        this.classList.add("completed");
        this.style.textDecoration = "line-through";
        this.dataset.date = date;
    }
}

window.onload = function() {
    var taskItems = document.querySelectorAll("#taskList li");
    taskItems.forEach(function(item) {
        item.addEventListener("click", toggleTask);
    });
};
