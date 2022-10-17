import {taskHandler} from "./Modules/tasks";

const newTask = (()=> {
    document.querySelector(".new-task").addEventListener("click", taskHandler);
})();
