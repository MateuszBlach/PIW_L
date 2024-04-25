"use strict";

const addTask = () => {
    const taskInput = document.getElementById("task");

    if (taskInput.value.trim() === "") {
        const modal = document.querySelector("dialog");
        modal.showModal();
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
        this.parentNode.remove();
    };

    listItem.appendChild(deleteButton);
    document.getElementById("unordered-list").appendChild(listItem);

    taskInput.value = "";

    listItem.addEventListener("click", () => {
        if (!listItem.classList.contains("completed")) {
            const date = new Date().toLocaleString();
            const dateText = document.createElement("span");
            dateText.textContent = ` - Completed: ${date}`;
            listItem.appendChild(dateText);
        } else {
            const dateText = listItem.querySelector("span");
            if (dateText) {
                listItem.removeChild(dateText);
            }
        }
        listItem.classList.toggle("completed");
    });
};

window.onload = () => {
    const closeButton = document.getElementById("closing");
    closeButton.addEventListener("click", () => {
        const modal = document.querySelector("dialog");
        modal.close();
    });
};
