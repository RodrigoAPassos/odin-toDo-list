/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules/tasks.js":
/*!******************************!*\
  !*** ./src/Modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHandler\": () => (/* binding */ displayHandler),\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"projectHandler\": () => (/* binding */ projectHandler),\n/* harmony export */   \"sortedOptions\": () => (/* binding */ sortedOptions),\n/* harmony export */   \"taskHandler\": () => (/* binding */ taskHandler)\n/* harmony export */ });\nconst toDo = JSON.parse(localStorage.getItem(\"toDo\")) || [{project:\"default\", title:\"Any Task\", description:\"Task synopsis\", dueDate:\"2022-10-18\", priority:\"low\", done:true}];\nlet taskProjects = JSON.parse(localStorage.getItem(\"taskProjects\")) || [...new Set(toDo.map(task => task.project))];\n\n//task factory\nconst Task = (project, title, description, dueDate, priority, done) => {\n    return {project, title, description, dueDate, priority, done};\n}\n\nconst addListenersTasks = () => {\n    document.querySelector(\".new-task\").addEventListener(\"click\", taskHandler);\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.addEventListener(\"click\", taskHandler);\n    });\n}\n\nconst removeListenersTasks = () => {\n    document.querySelector(\".new-task\").removeEventListener(\"click\", taskHandler);\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.removeEventListener(\"click\", taskHandler);\n    })\n}\n\nconst saveTask = () => {\n    document.getElementById(\"theForm\").addEventListener(\"submit\", (e) => {\n        //prevent refresh\n        e.preventDefault();\n        //get project name\n        let projectName = document.querySelector(\".main-title\").innerHTML;\n        projectName == \"Tasks\" ? projectName = \"default\" : projectName = projectName;\n        //push to array\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        let taskDone = false;\n        //add task to toDo list\n        toDo.push(Task(projectName, taskTitle, taskDesc, taskDate, taskPriority, taskDone));\n        //save on local storage\n        localStorage.setItem(\"toDo\", JSON.stringify(toDo));\n        //remove form\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        //add event listeners back\n        addListenersTasks();\n        //display all tasks of selected project\n        displayTask(projectName);\n    })\n};\n\n//handles the input of new task\nconst taskHandler = () => {\n    //remove event listeners while form active\n    removeListenersTasks();\n    //display form\n    displayTaskForm();\n    //watch for click\n    cancelTask();\n    saveTask();\n}\n\n//handles the input of the new project\nconst projectHandler = () => {\n    //remove event listeners while form active\n    document.querySelector(\".add-project\").removeEventListener(\"click\", projectHandler);\n    displayProjectForm();\n    cancelProject();\n    saveProject();\n}\n\nconst displayProjectForm = () => {\n    const projects = document.querySelector(\".project-form\");\n    //project form\n    const projectForm = document.createElement(\"form\");\n    projectForm.setAttribute(\"action\", \"\");\n    projectForm.setAttribute(\"id\", \"projectForm\");\n    //input project title\n    const inputProject = document.createElement(\"input\");\n    inputProject.setAttribute(\"type\", \"text\");\n    inputProject.setAttribute(\"id\", \"project-title\");\n    inputProject.setAttribute(\"placeholder\", \"Project Title\");\n    inputProject.setAttribute(\"maxlength\", \"15\");\n    inputProject.setAttribute(\"required\", \"true\");\n    //save button\n    const saveProject = document.createElement(\"button\");\n    saveProject.setAttribute(\"type\", \"submit\");\n    saveProject.setAttribute(\"id\", \"save-project\");\n    saveProject.innerHTML = \"Save\";\n    //cancel project\n    const projectCancel = document.createElement(\"div\");\n    projectCancel.classList.add(\"proj-cancel\");\n    projectCancel.setAttribute(\"id\", \"proj-cancel\");\n    //append\n    projectForm.appendChild(inputProject);\n    projectForm.appendChild(saveProject);\n    projectForm.appendChild(projectCancel);\n    projects.appendChild(projectForm);\n}\n\n//handles the new project\nconst saveProject = () => {\n    document.getElementById(\"projectForm\").addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const projectName = document.getElementById(\"project-title\").value;\n        taskProjects.push(projectName);\n        //save projects\n        localStorage.setItem(\"taskProjects\", JSON.stringify(taskProjects));\n        //remove project form\n        const projectForm = document.getElementById(\"projectForm\");\n        document.querySelector(\".project-form\").removeChild(projectForm);\n        //add event listener back to +Project\n        document.querySelector(\".add-project\").addEventListener(\"click\", projectHandler);\n        //display project created\n        displayHandler(projectName);\n    })\n}\n\n//display the form to add a new task\nconst displayTaskForm = () => {\n    const formContainer = document.querySelector(\".task-form\");\n\n    //the form\n    const theForm = document.createElement(\"form\");\n    theForm.setAttribute(\"action\", \"\");\n    theForm.setAttribute(\"id\", \"theForm\");\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"task-title\");\n    //title input\n    const inputTitle = document.createElement(\"input\");\n    inputTitle.setAttribute(\"id\", \"task-title\");\n    inputTitle.setAttribute(\"type\", \"text\");\n    inputTitle.setAttribute(\"placeholder\", \"Task Title\");\n    inputTitle.setAttribute(\"maxlength\", \"30\");\n    inputTitle.setAttribute(\"required\", \"true\");\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-desc\");\n    //description input\n    const inputDesc = document.createElement(\"input\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"type\", \"text\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"placeholder\", \"Task Description\");\n    inputDesc.setAttribute(\"maxlength\", \"120\");\n    //task due date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"dueDate\");\n    //due date input\n    const inputDate = document.createElement(\"input\");\n    inputDate.setAttribute(\"id\", \"dueDate\");\n    inputDate.setAttribute(\"type\", \"date\");\n    inputDate.setAttribute(\"name\", \"dueDate\");\n    inputDate.setAttribute(\"required\", \"true\");\n    //task priority\n    const taskPrior = document.createElement(\"div\");\n    taskPrior.classList.add(\"priority\");\n    //select priority\n    const selectPrior = document.createElement(\"select\");\n    selectPrior.setAttribute(\"id\", \"priority\");\n    selectPrior.setAttribute(\"name\", \"priority\");\n    selectPrior.setAttribute(\"required\", \"true\");\n    //options priority\n    //default\n    const optPrior = document.createElement(\"option\");\n    optPrior.setAttribute(\"value\", \"\");\n    optPrior.setAttribute(\"selected\", \"true\");\n    optPrior.setAttribute(\"disabled\", \"true\");\n    optPrior.setAttribute(\"hidden\", \"true\");\n    optPrior.innerHTML = \"Priority\";\n    //high\n    const optHigh = document.createElement(\"option\");\n    optHigh.setAttribute(\"value\", \"high\");\n    optHigh.innerHTML = \"High\";\n    //medium\n    const optMedium = document.createElement(\"option\");\n    optMedium.setAttribute(\"value\", \"medium\");\n    optMedium.innerHTML = \"Medium\";\n    //low\n    const optLow = document.createElement(\"option\");\n    optLow.setAttribute(\"value\", \"low\");\n    optLow.innerHTML = \"Low\";\n    //task cancel/save\n    const cancelSave = document.createElement(\"div\");\n    cancelSave.classList.add(\"cancel-save\");\n    //submit button\n    const saveBtn = document.createElement(\"button\");\n    saveBtn.setAttribute(\"type\", \"submit\");\n    saveBtn.setAttribute(\"id\", \"save\");\n    saveBtn.innerHTML = \"Save\";\n    //cancel\n    const taskCancel = document.createElement(\"div\");\n    taskCancel.classList.add(\"cancel-task\");\n    taskCancel.setAttribute(\"id\", \"cancel-task\");\n    taskCancel.setAttribute(\"title\", \"Cancel\");\n    //append\n    cancelSave.appendChild(saveBtn);\n    cancelSave.appendChild(taskCancel);\n    selectPrior.appendChild(optPrior);\n    selectPrior.appendChild(optHigh);\n    selectPrior.appendChild(optMedium);\n    selectPrior.appendChild(optLow);\n    taskPrior.appendChild(selectPrior);\n    taskDate.appendChild(inputDate);\n    taskDesc.appendChild(inputDesc);\n    taskTitle.appendChild(inputTitle);\n    theForm.appendChild(taskTitle);\n    theForm.appendChild(taskDesc);\n    theForm.appendChild(taskDate);\n    theForm.appendChild(taskPrior);\n    theForm.appendChild(cancelSave);\n    formContainer.appendChild(theForm);\n};\n\n//display the dorm to edit a task\nconst displayEditForm = (task) => {\n    const formContainer = document.querySelector(\".task-form\");\n    //the form\n    const theForm = document.createElement(\"form\");\n    theForm.setAttribute(\"action\", \"\");\n    theForm.setAttribute(\"id\", \"editForm\");\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"task-title\");\n    //title input\n    const inputTitle = document.createElement(\"input\");\n    inputTitle.setAttribute(\"id\", \"task-title\");\n    inputTitle.setAttribute(\"type\", \"text\");\n    inputTitle.setAttribute(\"value\", task.title);\n    inputTitle.setAttribute(\"placeholder\", \"Task Title\");\n    inputTitle.setAttribute(\"maxlength\", \"30\");\n    inputTitle.setAttribute(\"required\", \"true\");\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-desc\");\n    //description input\n    const inputDesc = document.createElement(\"input\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"type\", \"text\");\n    inputDesc.setAttribute(\"value\", task.description);\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"placeholder\", \"Task Description\");\n    inputDesc.setAttribute(\"maxlength\", \"120\");\n    //task due date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"dueDate\");\n    //due date input\n    const inputDate = document.createElement(\"input\");\n    inputDate.setAttribute(\"id\", \"dueDate\");\n    inputDate.setAttribute(\"type\", \"date\");\n    inputDate.setAttribute(\"value\", task.dueDate);\n    inputDate.setAttribute(\"name\", \"dueDate\");\n    inputDate.setAttribute(\"required\", \"true\");\n    //task priority\n    const taskPrior = document.createElement(\"div\");\n    taskPrior.classList.add(\"priority\");\n    //select priority\n    const selectPrior = document.createElement(\"select\");\n    selectPrior.setAttribute(\"id\", \"priority\");\n    selectPrior.setAttribute(\"name\", \"priority\");\n    selectPrior.setAttribute(\"required\", \"true\");\n    //options priority\n    //high\n    const optHigh = document.createElement(\"option\");\n    optHigh.setAttribute(\"value\", \"high\");\n    optHigh.innerHTML = \"High\";\n    //medium\n    const optMedium = document.createElement(\"option\");\n    optMedium.setAttribute(\"value\", \"medium\");\n    optMedium.innerHTML = \"Medium\";\n    //low\n    const optLow = document.createElement(\"option\");\n    optLow.setAttribute(\"value\", \"low\");\n    optLow.innerHTML = \"Low\";\n    //test for original priority\n    if (task.priority == \"high\") {\n        optHigh.setAttribute(\"selected\", \"true\");\n    }else if (task.priority == \"medium\") {\n        optMedium.setAttribute(\"selected\", \"true\");\n    }else optLow.setAttribute(\"selected\", \"true\");\n    //task cancel/save\n    const cancelSave = document.createElement(\"div\");\n    cancelSave.classList.add(\"cancel-save\");\n    //submit button\n    const saveBtn = document.createElement(\"button\");\n    saveBtn.setAttribute(\"type\", \"submit\");\n    saveBtn.setAttribute(\"id\", \"save\");\n    saveBtn.innerHTML = \"Save\";\n    //cancel\n    const taskCancel = document.createElement(\"div\");\n    taskCancel.classList.add(\"cancel-task\");\n    taskCancel.setAttribute(\"id\", \"cancel-task\");\n    taskCancel.setAttribute(\"title\", \"Cancel\");\n    //append\n    cancelSave.appendChild(saveBtn);\n    cancelSave.appendChild(taskCancel);\n    selectPrior.appendChild(optHigh);\n    selectPrior.appendChild(optMedium);\n    selectPrior.appendChild(optLow);\n    taskPrior.appendChild(selectPrior);\n    taskDate.appendChild(inputDate);\n    taskDesc.appendChild(inputDesc);\n    taskTitle.appendChild(inputTitle);\n    theForm.appendChild(taskTitle);\n    theForm.appendChild(taskDesc);\n    theForm.appendChild(taskDate);\n    theForm.appendChild(taskPrior);\n    theForm.appendChild(cancelSave);\n    formContainer.appendChild(theForm);\n}\n\n//add the new project to the manager area\nconst displayMngProj = () => {\n    //clear projects\n    const myProj = document.querySelector(\".projects\");\n    const clearProjects = document.querySelectorAll(\".newProject\");\n    clearProjects.forEach((project) => {\n        myProj.removeChild(project);\n    })\n    //display each on manager area\n    for (let projectName of taskProjects) {\n        if (projectName == \"default\") {\n            continue;\n        }else {\n        //projects\n        const projects = document.querySelector(\".projects\");\n        //new project manager\n        const newProject = document.createElement(\"div\");\n        newProject.classList.add(\"newProject\");\n        newProject.setAttribute(\"name\", projectName);\n        //proj container\n        const proj = document.createElement(\"div\");\n        proj.classList.add(\"proj\");\n        //proj title\n        const projTitle = document.createElement(\"div\");\n        projTitle.classList.add(\"proj-title\");\n        projTitle.setAttribute(\"title\", \"Project\");   \n        projTitle.innerHTML = projectName;\n        projTitle.addEventListener(\"click\",()=> displayHandler(projectName));\n        //proj delete\n        const delProj = document.createElement(\"div\");\n        delProj.classList.add(\"proj-del\");\n        delProj.setAttribute(\"title\", \"Delete Project and all it's tasks!\");\n        delProj.setAttribute(\"name\", projectName);\n        delProj.addEventListener(\"click\", ()=> delProject(projectName));\n        //add proj task\n        const projTask = document.createElement(\"div\");\n        projTask.classList.add(\"add-proj-task\");\n        projTask.setAttribute(\"name\", projectName);\n        projTask.innerHTML = \"+task\";\n        projTask.addEventListener(\"click\", taskHandler);\n        //append\n        proj.appendChild(projTitle);\n        proj.appendChild(delProj);\n        newProject.appendChild(proj);\n        newProject.appendChild(projTask);\n        //append before\n        const beforeThis = document.querySelector(\".projects\").firstChild;\n        projects.insertBefore(newProject, beforeThis);\n        }\n    }\n}\n\n//watch for click to cancel add project\nconst cancelProject = () => {\n    //watch for click on cancel\n    document.getElementById(\"proj-cancel\").addEventListener(\"click\", ()=> {\n        //remove form\n        const projectForm = document.getElementById(\"projectForm\");\n        document.querySelector(\".project-form\").removeChild(projectForm);\n        //add event listeners back\n        document.querySelector(\".add-project\").addEventListener(\"click\", projectHandler);\n    })\n}\n\n//watch for click to cancel add task\nconst cancelTask = () => {\n    //watch for click on cancel\n    document.getElementById(\"cancel-task\").addEventListener(\"click\", ()=> {\n        //remove form\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        //add event listeners back\n        addListenersTasks();\n    })\n}\n\nconst cancelEdit = () => {\n    //watch for click on cancel\n    document.getElementById(\"cancel-task\").addEventListener(\"click\", ()=> {\n        //remove form\n        const editForm = document.getElementById(\"editForm\");\n        document.querySelector(\".task-form\").removeChild(editForm);\n        //add event listeners back\n        addListenersTasks();\n    })\n}\n\n//delete the selected project from the manager area and all the tasks of that project\nconst delProject = (projectName) => {\n    //delete all tasks of that project\n    for (let i=0;i<=toDo.length;i++){\n        toDo.forEach((task) => {\n            if (task.project == projectName) {\n                toDo.splice(toDo.indexOf(task), 1);\n            };\n        })\n    }\n    //save toDos on local storage\n    localStorage.setItem(\"toDo\", JSON.stringify(toDo));\n    //update taskProjects\n    taskProjects.splice(taskProjects.indexOf(projectName), 1);\n    //save projects\n    localStorage.setItem(\"taskProjects\", JSON.stringify(taskProjects));\n    displayMngProj();\n    displayHandler(\"Tasks\");\n}\n\n//delete the selected task of the array toDo\nconst delTask = (value) => {\n    document.querySelectorAll(\".task\").forEach((task) => {\n        if (task.getAttribute(\"value\") == value) {\n            toDo.splice(Number(task.getAttribute(\"value\")), 1);\n            //save on local storage\n            localStorage.setItem(\"toDo\", JSON.stringify(toDo));\n            displayTask();\n        }\n    })\n}\n\n//clear the main display of all tasks (before display again)\nconst clearTask = () => {\n    //clear display of tasks\n    const myTasks = document.querySelector(\".my-tasks\");\n    const clearTasks = document.querySelectorAll(\".task\");\n    clearTasks.forEach((task) => {\n        myTasks.removeChild(task);\n    })\n}\n\n//display all tasks of selected project\nconst displayTask = (projectName = \"default\", mode) => {\n    clearTask();\n    switch (mode){\n        case \"Day\":\n            document.querySelector(\".new-task\").style.display = \"none\";\n            displayHandler(\"Today\");\n            toDo.forEach((task) => {\n                const today = new Date();\n                const date = task.dueDate;\n                const dateArray = new Date(date.split(\"-\"));\n                if (dateArray.getDate() == today.getDate()) {\n                    showTasks(task);\n                }\n            })\n        break;\n        case \"Week\":\n            document.querySelector(\".new-task\").style.display = \"none\";\n            displayHandler(\"Week\");\n            const today = new Date();\n            const sunday = new Date(today.setDate(today.getDate() - today.getDay()));\n            const week = [sunday.getDate()];\n            for (let i= 1;i<7;i++) {\n                week.push(sunday.getDate()+i);\n            }\n            toDo.forEach((task)=> {\n                const date = task.dueDate;\n                const dateArray = new Date(date.split(\"-\"));\n                week.forEach((day)=> {\n                    if (day == dateArray.getDate()) {\n                        showTasks(task);\n                    }\n                })\n            })\n        break;\n        case \"Month\":\n            document.querySelector(\".new-task\").style.display = \"none\";\n            displayHandler(\"Month\");\n            toDo.forEach((task) => {\n                const today = new Date();\n                const date = task.dueDate;\n                const dateArray = new Date(date.split(\"-\"));\n                if (dateArray.getMonth() == today.getMonth()) {\n                    showTasks(task);\n                }\n            })\n        break;\n        default:\n            projectName == \"Tasks\" ? projectName = \"default\" : projectName = projectName;\n            toDo.forEach((task) => {\n                if (task.project == projectName) {\n                    showTasks(task);\n                }\n            })\n        break;\n    }\n    displayMngProj();\n    taskDone();\n}\n\n//show the chosen tasks \nconst showTasks = (task) => {\n    const myTasks = document.querySelector(\".my-tasks\");\n    //Task\n    const theTask = document.createElement(\"div\");\n    //task done?\n    if (task.done == true) {\n        theTask.classList.add(\"task\");\n        theTask.classList.add(\"taskDone\");\n    }else {theTask.classList.add(\"task\");}\n    //task priority\n    if (task.priority == \"low\") {\n        theTask.style.borderLeft = \"12px solid green\";\n        theTask.setAttribute(\"title\", \"Priority: Low\");\n    }else if (task.priority == \"medium\") {\n        theTask.style.borderLeft = \"12px solid yellow\";\n        theTask.setAttribute(\"title\", \"Priority: Medium\");\n    }else {\n        theTask.style.borderLeft = \"12px solid red\";\n        theTask.setAttribute(\"title\", \"Priority: High\");\n    };\n    theTask.setAttribute(\"value\", toDo.indexOf(task));\n    //conclude option\n    const optConclude = document.createElement(\"div\");\n    optConclude.classList.add(\"conclude\");\n    //conclude input\n    const inputConclude = document.createElement(\"input\");\n    inputConclude.setAttribute(\"type\", \"checkbox\");\n    inputConclude.setAttribute(\"name\", \"conclude\");\n    inputConclude.setAttribute(\"title\", \"Incomplete\");\n    inputConclude.setAttribute(\"id\", \"conclude\");\n    if (task.done == true) {\n        inputConclude.setAttribute(\"checked\", true);\n        inputConclude.setAttribute(\"title\", \"Complete\");\n    };\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"tasks-title\");\n    taskTitle.setAttribute(\"title\", \"Task Title\");\n    taskTitle.innerHTML = task.title;\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-description\");\n    taskDesc.setAttribute(\"title\", \"Task Description\");\n    taskDesc.innerHTML = task.description;\n    //task date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"task-date\");\n    taskDate.setAttribute(\"title\", \"Due Date\");\n    const date = task.dueDate;\n    const dateArray = new Date(date.split(\"-\"));\n    const month = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n    taskDate.innerHTML =  month[dateArray.getMonth()] + \"/\" + dateArray.getDate();\n    //edit task\n    const editTask = document.createElement(\"button\");\n    editTask.classList.add(\"edit-task\");\n    editTask.setAttribute(\"value\", toDo.indexOf(task));\n    editTask.setAttribute(\"title\", \"Edit\");\n    editTask.addEventListener(\"click\",()=> taskEdit(task));\n    //del task\n    const deleteTask = document.createElement(\"button\");\n    deleteTask.classList.add(\"del-task\");\n    deleteTask.setAttribute(\"value\", toDo.indexOf(task));\n    deleteTask.setAttribute(\"title\", \"Delete\");\n    deleteTask.addEventListener(\"click\",()=> delTask(deleteTask.value));\n    //append\n    optConclude.appendChild(inputConclude);\n    theTask.appendChild(optConclude);\n    theTask.appendChild(taskTitle);\n    theTask.appendChild(taskDesc);\n    theTask.appendChild(taskDate);\n    theTask.appendChild(editTask);\n    theTask.appendChild(deleteTask);\n    //append before\n    const beforeThis = document.querySelector(\".my-tasks\").firstChild;\n    myTasks.insertBefore(theTask, beforeThis);\n}\n\n//edit task\nconst taskEdit = (task) => {\n    removeListenersTasks();\n    let taskIndex = toDo.indexOf(task);\n    //display edit form\n    displayEditForm(task);\n    //watch for cancel\n    cancelEdit();\n    //submit edit\n    document.getElementById(\"editForm\").addEventListener(\"submit\", (e)=> {\n        e.preventDefault();\n        //get project name\n        let projectName = document.querySelector(\".main-title\").innerHTML;\n        projectName == \"Tasks\" ? projectName = \"default\" : projectName = projectName;\n        //push to array\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        let taskDone = false;\n        let editedTask = {project:projectName, title:taskTitle, description:taskDesc, dueDate:taskDate, priority:taskPriority, done:taskDone};\n        //add edited task to toDo list\n        toDo.splice(taskIndex, 1, editedTask);\n        //save on local storage\n        localStorage.setItem(\"toDo\", JSON.stringify(toDo));\n        //remove form\n        const editForm = document.getElementById(\"editForm\");\n        document.querySelector(\".task-form\").removeChild(editForm);\n        //add event listeners back\n        addListenersTasks();\n        //display all tasks of selected project\n        displayTask(projectName);\n    })\n}\n\n//watch for checkbox of task complete\nconst taskDone = () => {\n    document.querySelectorAll(\".task\").forEach((task) => {\n        task.querySelector(\"input[name=conclude]\").addEventListener(\"change\", function() {\n            if (this.checked) {\n                task.classList.add(\"taskDone\");\n                toDo[task.getAttribute(\"value\")].done = true;\n            }else {\n                task.classList.remove(\"taskDone\");\n                toDo[task.getAttribute(\"value\")].done = false;\n            };\n        })\n    })\n}\n\n//Handles display of delete, add task and project title\nconst displayHandler = (projectName) => {\n    console.log(projectName);\n    //Display Project Name\n    document.querySelector(\".main-title\").innerHTML = projectName;\n    //Display add task option in manager area\n    document.querySelectorAll(\".add-proj-task\").forEach((projTask) => {\n        if (projTask.getAttribute(\"name\") == \"default\" && projectName == \"Tasks\") {\n            //Once project display, show new-task button\n            document.querySelector(\".new-task\").style.display = \"block\";\n            projTask.style.display = \"block\";\n        }else if (projTask.getAttribute(\"name\") == projectName && projectName != \"Tasks\") {\n            //Once project display, show new-task button\n            document.querySelector(\".new-task\").style.display = \"block\";\n            //display +task of project selected\n            projTask.style.display = \"block\";\n        }else {\n            //don't display +task of unselected projects\n            projTask.style.display = \"none\";\n        };\n    })\n    //Display del project option\n    document.querySelectorAll(\".proj-del\").forEach((projDel) => {\n        if (projDel.getAttribute(\"name\") == \"default\" && projectName == \"Tasks\") {\n            projDel.style.display = \"block\";\n        }else if (projDel.getAttribute(\"name\") == projectName && projectName != \"Tasks\") {\n            projDel.style.display = \"block\";\n        }else {\n            projDel.style.display = \"none\";\n        };\n    })\n    //Display Tasks of Project only\n    displayTask(projectName);\n}\n\n//sorted\nconst sortedOptions = (sortedFor) => {\n    let title = document.querySelector(\".main-title\").innerHTML;\n    if (sortedFor == \"priority\"){\n        toDo.sort((task1, task2) => {\n            if (task1.priority == \"high\" && task2.priority == \"low\") return 1;\n            else if (task1.priority == \"low\" && task2.priority == \"high\") return -1;\n            else if (task1.priority == \"high\" && task2.priority == \"medium\") return 1;\n            else if (task1.priority == \"medium\" && task2.priority == \"high\") return -1;\n            else if (task1.priority == \"medium\" && task2.priority == \"low\") return 1;\n            else if (task1.priority == \"low\" && task2.priority == \"medium\") return -1;\n            else return 0;\n        })\n        if(title == \"Today\" || title == \"Month\" || title == \"Week\") {\n            displayTask(\"default\", title);\n        }else displayTask(title);\n    }else {\n        toDo.sort((task1, task2) => {\n            let date1 = task1.dueDate;\n            const dateArray1 = new Date(date1.split(\"-\"));\n            let date2 = task2.dueDate;\n            const dateArray2 = new Date(date2.split(\"-\"));\n            if (dateArray1.getMonth() == dateArray2.getMonth()) {\n                return dateArray1.getDate() < dateArray2.getDate() ? -1 : 1;\n            }else return dateArray1.getMonth() < dateArray2.getMonth() ? -1 : 1;\n        });\n        if(title == \"Today\" || title == \"Month\" || title == \"Week\") {\n            displayTask(\"default\", title);\n        }else displayTask(title);\n    }\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/Modules/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/tasks */ \"./src/Modules/tasks.js\");\n\n\nconst newTask = (()=> {\n    document.querySelector(\".new-task\").addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.taskHandler);\n})();\n\nconst newProjTask = (()=> {\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.taskHandler);\n    })\n})();\n\nconst newProject = (() => {\n    document.querySelector(\".add-project\").addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.projectHandler);\n})();\n\nconst displayFilters = (() => {\n    document.querySelector(\".day\").addEventListener(\"click\", ()=> (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)(\"\", \"Day\"));\n    document.querySelector(\".week\").addEventListener(\"click\", ()=> (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)(\"\", \"Week\"));\n    document.querySelector(\".month\").addEventListener(\"click\", ()=> (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)(\"\", \"Month\"));\n})();\n\nconst sortTask = (()=> {\n    document.getElementById(\"sort\").addEventListener(\"change\", ()=> (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.sortedOptions)(document.getElementById(\"sort\").value));\n})();\n\n//watch for Tasks default project selected\nconst projDisplay = (() => {\n    document.getElementById(\"proj-default\").addEventListener(\"click\", ()=> (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayHandler)(\"Tasks\"));\n})();\n\n(0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;