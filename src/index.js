import {displayTaskForm, saveTask} from "./Modules/tasks";

const newTask = (()=> {
    document.querySelector(".new-task").addEventListener("click", ()=> {
        //task form
        displayTaskForm();
        saveTask();
    })
})();

/*
const saveTask = (()=> {
    document.getElementById("save").addEventListener("click", ()=> {
        let taskTitle = document.getElementById("task-title").value;
        let taskDesc = document.getElementById("task-description").value;
        let taskDate = document.getElementById("dueDate").value;
        let taskPriority = document.getElementById("priority").value;
        let taskDone = false;
        if (taskTitle != "" && taskDate != "" && taskPriority != "") {
            toDo.push(Task("default", taskTitle, taskDesc, taskDate, taskPriority, taskDone));
            document.querySelector(".task-form").style.display = "none";
            document.getElementById("task-title").value = "";
            document.getElementById("task-description").value = "";
            document.getElementById("dueDate").value = "";
            document.getElementById("priority").value = "";
        }else return;
    })
})();
*/