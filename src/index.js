import {taskHandler, displayTask} from "./Modules/tasks";

const newTask = (()=> {
    document.querySelector(".new-task").addEventListener("click", taskHandler);
})();

const newProjTask = (()=> {
    document.querySelectorAll(".add-proj-task").forEach((taskProj) => {
        taskProj.addEventListener("click", taskHandler);
    })
})();
displayTask();