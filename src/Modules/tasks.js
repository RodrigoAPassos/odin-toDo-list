const toDo = [];

//task factory
const Task = (project, title, description, dueDate, priority, done) => {
    return {project, title, description, dueDate, priority, done};
}

const saveTask = () => {
    document.getElementById("save").addEventListener("submit", ()=> {

        let taskTitle = document.getElementById("task-title").value;
        let taskDesc = document.getElementById("task-description").value;
        let taskDate = document.getElementById("dueDate").value;
        let taskPriority = document.getElementById("priority").value;
        let taskDone = false;
        toDo.push(Task("default", taskTitle, taskDesc, taskDate, taskPriority, taskDone));
        const theForm = document.getElementById("theForm");
        document.querySelector(".task-form").removeChild(theForm);
    })
};

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



export {
    saveTask,
    displayTaskForm
};