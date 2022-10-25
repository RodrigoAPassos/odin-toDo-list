import {taskHandler, displayTask, projectHandler, sortedOptions, displayHandler} from "./Modules/tasks";

const newTask = (()=> {
    document.querySelector(".new-task").addEventListener("click", taskHandler);
})();

const newProjTask = (()=> {
    document.querySelectorAll(".add-proj-task").forEach((taskProj) => {
        taskProj.addEventListener("click", taskHandler);
    })
})();

const newProject = (() => {
    document.querySelector(".add-project").addEventListener("click", projectHandler);
})();

const displayFilters = (() => {
    document.querySelector(".day").addEventListener("click", ()=> displayTask("", "Day"));
    document.querySelector(".week").addEventListener("click", ()=> displayTask("", "Week"));
    document.querySelector(".month").addEventListener("click", ()=> displayTask("", "Month"));
})();

const sortTask = (()=> {
    document.getElementById("sort").addEventListener("change", ()=> sortedOptions(document.getElementById("sort").value));
})();

//watch for Tasks default project selected
const projDisplay = (() => {
    document.getElementById("proj-default").addEventListener("click", ()=> displayTask("Tasks"));
})();

displayTask();