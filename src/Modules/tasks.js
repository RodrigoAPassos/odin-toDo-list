const toDo = [{project:"default", title:"Any Task", description:"Task synopsis", dueDate:"2022-10-18", priority:"low", done:true}];

//task factory
const Task = (project, title, description, dueDate, priority, done) => {
    return {project, title, description, dueDate, priority, done};
}

const saveTask = () => {
    document.getElementById("theForm").addEventListener("submit", (e) => {
        e.preventDefault();
        let taskProject = document.querySelector(".main-title").innerHTML;
        taskProject == "Tasks" ? taskProject = "default" : taskProject = taskProject;
        let taskTitle = document.getElementById("task-title").value;
        let taskDesc = document.getElementById("task-description").value;
        let taskDate = document.getElementById("dueDate").value;
        let taskPriority = document.getElementById("priority").value;
        let taskDone = false;
        toDo.push(Task(taskProject, taskTitle, taskDesc, taskDate, taskPriority, taskDone));
        const theForm = document.getElementById("theForm");
        document.querySelector(".task-form").removeChild(theForm);
        document.querySelector(".new-task").addEventListener("click", taskHandler);
        document.querySelectorAll(".add-proj-task").forEach((taskProj) => {
            taskProj.addEventListener("click", taskHandler);
        })
        displayTask();
    })
};

const taskHandler = () => {
    document.querySelector(".new-task").removeEventListener("click", taskHandler);
    document.querySelectorAll(".add-proj-task").forEach((taskProj) => {
        taskProj.removeEventListener("click", taskHandler);
    })
    displayTaskForm();
    cancelTask();
    saveTask();
}

const projectHandler = () => {
    document.querySelector(".add-project").removeEventListener("click", projectHandler);
    displayProjectForm();
    cancelProject();
    saveProject();
}

const displayProjectForm = () => {
    const projects = document.querySelector(".project-form");
    //project form
    const projectForm = document.createElement("form");
    projectForm.setAttribute("action", "");
    projectForm.setAttribute("id", "projectForm");
    //input project title
    const inputProject = document.createElement("input");
    inputProject.setAttribute("type", "text");
    inputProject.setAttribute("id", "project-title");
    inputProject.setAttribute("placeholder", "Project Title");
    inputProject.setAttribute("maxlength", "15");
    inputProject.setAttribute("required", "true");
    //save button
    const saveProject = document.createElement("button");
    saveProject.setAttribute("type", "submit");
    saveProject.setAttribute("id", "save-project");
    saveProject.innerHTML = "Save";
    //cancel project
    const projectCancel = document.createElement("div");
    projectCancel.classList.add("proj-cancel");
    projectCancel.setAttribute("id", "proj-cancel");
    //append
    projectForm.appendChild(inputProject);
    projectForm.appendChild(saveProject);
    projectForm.appendChild(projectCancel);
    projects.appendChild(projectForm);
}

const saveProject = () => {
    document.getElementById("projectForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const projectName = document.getElementById("project-title").value;
        //projects
        const projects = document.querySelector(".projects");
        //new project manager
        const newProject = document.createElement("div");
        newProject.classList.add("newProject");
        //proj title
        const projTitle = document.createElement("div");
        projTitle.classList.add("proj-title");
        projTitle.innerHTML = projectName;
        //projTitle.addEventListener("click", displayProject);
        //add proj task
        const projTask = document.createElement("div");
        projTask.classList.add("add-proj-task");
        projTask.setAttribute("name", projectName);
        projTask.innerHTML = "+task";
        //append
        newProject.appendChild(projTitle);
        newProject.appendChild(projTask);
        //append before
        const beforeThis = document.querySelector(".projects").firstChild;
        projects.insertBefore(newProject, beforeThis);
        //remove project form
        const projectForm = document.getElementById("projectForm");
        document.querySelector(".project-form").removeChild(projectForm);
        //add event listener back to +Project
        document.querySelector(".add-project").addEventListener("click", projectHandler);
        //display project created
    })
}

const displayTaskForm = () => {
    const formContainer = document.querySelector(".task-form");

    //the form
    const theForm = document.createElement("form");
    theForm.setAttribute("action", "");
    theForm.setAttribute("id", "theForm");
    //task title
    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    //title input
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("id", "task-title");
    inputTitle.setAttribute("type", "text");
    inputTitle.setAttribute("placeholder", "Task Title");
    inputTitle.setAttribute("maxlength", "30");
    inputTitle.setAttribute("required", "true");
    //task description
    const taskDesc = document.createElement("div");
    taskDesc.classList.add("task-desc");
    //description input
    const inputDesc = document.createElement("input");
    inputDesc.setAttribute("id", "task-description");
    inputDesc.setAttribute("type", "text");
    inputDesc.setAttribute("id", "task-description");
    inputDesc.setAttribute("placeholder", "Task Description");
    inputDesc.setAttribute("maxlength", "120");
    //task due date
    const taskDate = document.createElement("div");
    taskDate.classList.add("dueDate");
    //due date input
    const inputDate = document.createElement("input");
    inputDate.setAttribute("id", "dueDate");
    inputDate.setAttribute("type", "date");
    inputDate.setAttribute("name", "dueDate");
    inputDate.setAttribute("required", "true");
    //task priority
    const taskPrior = document.createElement("div");
    taskPrior.classList.add("priority");
    //select priority
    const selectPrior = document.createElement("select");
    selectPrior.setAttribute("id", "priority");
    selectPrior.setAttribute("name", "priority");
    selectPrior.setAttribute("required", "true");
    //options priority
    //default
    const optPrior = document.createElement("option");
    optPrior.setAttribute("value", "");
    optPrior.setAttribute("selected", "true");
    optPrior.setAttribute("disabled", "true");
    optPrior.setAttribute("hidden", "true");
    optPrior.innerHTML = "Priority";
    //high
    const optHigh = document.createElement("option");
    optHigh.setAttribute("value", "high");
    optHigh.innerHTML = "High";
    //medium
    const optMedium = document.createElement("option");
    optMedium.setAttribute("value", "medium");
    optMedium.innerHTML = "Medium";
    //low
    const optLow = document.createElement("option");
    optLow.setAttribute("value", "low");
    optLow.innerHTML = "Low";
    //task cancel/save
    const cancelSave = document.createElement("div");
    cancelSave.classList.add("cancel-save");
    //submit button
    const saveBtn = document.createElement("button");
    saveBtn.setAttribute("type", "submit");
    saveBtn.setAttribute("id", "save");
    saveBtn.innerHTML = "Save";
    //cancel
    const taskCancel = document.createElement("div");
    taskCancel.classList.add("cancel-task");
    taskCancel.setAttribute("id", "cancel-task");
    //append
    cancelSave.appendChild(saveBtn);
    cancelSave.appendChild(taskCancel);
    selectPrior.appendChild(optPrior);
    selectPrior.appendChild(optHigh);
    selectPrior.appendChild(optMedium);
    selectPrior.appendChild(optLow);
    taskPrior.appendChild(selectPrior);
    taskDate.appendChild(inputDate);
    taskDesc.appendChild(inputDesc);
    taskTitle.appendChild(inputTitle);
    theForm.appendChild(taskTitle);
    theForm.appendChild(taskDesc);
    theForm.appendChild(taskDate);
    theForm.appendChild(taskPrior);
    theForm.appendChild(cancelSave);
    formContainer.appendChild(theForm);
};

const cancelProject = () => {
    document.getElementById("proj-cancel").addEventListener("click", ()=> {
        const projectForm = document.getElementById("projectForm");
        document.querySelector(".newProject").removeChild(projectForm);
        document.querySelector(".add-project").addEventListener("click", projectHandler);
    })
}

const cancelTask = () => {
    document.getElementById("cancel-task").addEventListener("click", ()=> {
        const theForm = document.getElementById("theForm");
        document.querySelector(".task-form").removeChild(theForm);
        document.querySelector(".new-task").addEventListener("click", taskHandler);
        document.querySelectorAll(".add-proj-task").forEach((taskProj) => {
            taskProj.addEventListener("click", taskHandler);
        })
    })
}

const delTaskBtn = () => {
    document.querySelectorAll(".del-task").forEach((task) => {
        task.addEventListener("click", ()=> delTask(task.getAttribute("value")))
    })
}

const delTask = (value) => {
    document.querySelectorAll(".task").forEach((task) => {
        if (task.getAttribute("value") == value) {
            toDo.splice(Number(task.getAttribute("value")), 1);
            displayTask();
        }
    })
}

const displayTask = () => {
    //clear
    const myTasks = document.querySelector(".my-tasks");
    const clearTasks = document.querySelectorAll(".task");
    clearTasks.forEach((task) => {
        myTasks.removeChild(task);
    })
    toDo.forEach((task) => {
        console.log(task);//control
        const myTasks = document.querySelector(".my-tasks");
        //Task
        const theTask = document.createElement("div");
        //task done?
        if (task.done == true) {
            theTask.classList.add("task");
            theTask.classList.add("taskDone");
        }else {theTask.classList.add("task");}
        //task priority
        if (task.priority == "low") {
            theTask.style.borderLeft = "12px solid green";
        }else if (task.priority == "medium") {
            theTask.style.borderLeft = "12px solid yellow";
        }else theTask.style.borderLeft = "12px solid red";
        theTask.setAttribute("value", toDo.indexOf(task));
        //conclude option
        const optConclude = document.createElement("div");
        optConclude.classList.add("conclude");
        //conclude input
        const inputConclude = document.createElement("input");
        inputConclude.setAttribute("type", "checkbox");
        inputConclude.setAttribute("name", "conclude");
        inputConclude.setAttribute("id", "conclude");
        if (task.done == true) {
            inputConclude.setAttribute("checked", true);
        };
        //task title
        const taskTitle = document.createElement("div");
        taskTitle.classList.add("tasks-title");
        taskTitle.innerHTML = task.title;
        //task description
        const taskDesc = document.createElement("div");
        taskDesc.classList.add("task-description");
        taskDesc.innerHTML = task.description;
        //task date
        const taskDate = document.createElement("div");
        taskDate.classList.add("task-date");
        const date = task.dueDate;
        const dateArray = date.split("-");
        taskDate.innerHTML = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
        //del task
        const deleteTask = document.createElement("button");
        deleteTask.classList.add("del-task");
        deleteTask.setAttribute("value", toDo.indexOf(task));
        //append
        optConclude.appendChild(inputConclude);
        theTask.appendChild(optConclude);
        theTask.appendChild(taskTitle);
        theTask.appendChild(taskDesc);
        theTask.appendChild(taskDate);
        theTask.appendChild(deleteTask);
        //myTasks.appendChild(theTask);
        //append before
        const beforeThis = document.querySelector(".my-tasks").firstChild;
        myTasks.insertBefore(theTask, beforeThis);
    })
    delTaskBtn();
    taskDone();
}

const taskDone = () => {
    document.querySelectorAll(".task").forEach((task) => {
        task.querySelector("input[name=conclude]").addEventListener("change", function() {
            if (this.checked) {
                task.classList.add("taskDone");
                toDo[task.getAttribute("value")].done = true;
            }else {
                task.classList.remove("taskDone");
                toDo[task.getAttribute("value")].done = false;
            };
        })
    })
}

export {
    taskHandler,
    displayTask,
    projectHandler
};