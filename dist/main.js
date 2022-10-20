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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTask\": () => (/* binding */ displayTask),\n/* harmony export */   \"projectHandler\": () => (/* binding */ projectHandler),\n/* harmony export */   \"taskHandler\": () => (/* binding */ taskHandler)\n/* harmony export */ });\nconst toDo = [{project:\"default\", title:\"Any Task\", description:\"Task synopsis\", dueDate:\"2022-10-18\", priority:\"low\", done:true}];\n\n//task factory\nconst Task = (project, title, description, dueDate, priority, done) => {\n    return {project, title, description, dueDate, priority, done};\n}\n\nconst addListenersTasks = () => {\n    document.querySelector(\".new-task\").addEventListener(\"click\", taskHandler);\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.addEventListener(\"click\", taskHandler);\n    });\n}\n\nconst removeListenersTasks = () => {\n    document.querySelector(\".new-task\").removeEventListener(\"click\", taskHandler);\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.removeEventListener(\"click\", taskHandler);\n    })\n}\n\nconst saveTask = () => {\n    document.getElementById(\"theForm\").addEventListener(\"submit\", (e) => {\n        //prevent refresh\n        e.preventDefault();\n        //get project name\n        let projectName = document.querySelector(\".main-title\").innerHTML;\n        projectName == \"Tasks\" ? projectName = \"default\" : projectName = projectName;\n        //push to array\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        let taskDone = false;\n        toDo.push(Task(projectName, taskTitle, taskDesc, taskDate, taskPriority, taskDone));\n        //remove form\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        //add event listeners back\n        addListenersTasks();\n        //display all tasks of selected project\n        displayTask(projectName);\n    })\n};\n\n//handles the input of new task\nconst taskHandler = () => {\n    //remove event listeners while form active\n    removeListenersTasks();\n    //display form\n    displayTaskForm();\n    //watch for click\n    cancelTask();\n    saveTask();\n}\n\n//handles the input of the new project\nconst projectHandler = () => {\n    //remove event listeners while form active\n    document.querySelector(\".add-project\").removeEventListener(\"click\", projectHandler);\n    displayProjectForm();\n    cancelProject();\n    saveProject();\n}\n\nconst displayProjectForm = () => {\n    const projects = document.querySelector(\".project-form\");\n    //project form\n    const projectForm = document.createElement(\"form\");\n    projectForm.setAttribute(\"action\", \"\");\n    projectForm.setAttribute(\"id\", \"projectForm\");\n    //input project title\n    const inputProject = document.createElement(\"input\");\n    inputProject.setAttribute(\"type\", \"text\");\n    inputProject.setAttribute(\"id\", \"project-title\");\n    inputProject.setAttribute(\"placeholder\", \"Project Title\");\n    inputProject.setAttribute(\"maxlength\", \"15\");\n    inputProject.setAttribute(\"required\", \"true\");\n    //save button\n    const saveProject = document.createElement(\"button\");\n    saveProject.setAttribute(\"type\", \"submit\");\n    saveProject.setAttribute(\"id\", \"save-project\");\n    saveProject.innerHTML = \"Save\";\n    //cancel project\n    const projectCancel = document.createElement(\"div\");\n    projectCancel.classList.add(\"proj-cancel\");\n    projectCancel.setAttribute(\"id\", \"proj-cancel\");\n    //append\n    projectForm.appendChild(inputProject);\n    projectForm.appendChild(saveProject);\n    projectForm.appendChild(projectCancel);\n    projects.appendChild(projectForm);\n}\n\n//handles the new project\nconst saveProject = () => {\n    document.getElementById(\"projectForm\").addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const projectName = document.getElementById(\"project-title\").value;\n        //remove project form\n        const projectForm = document.getElementById(\"projectForm\");\n        document.querySelector(\".project-form\").removeChild(projectForm);\n        //add event listener back to +Project\n        document.querySelector(\".add-project\").addEventListener(\"click\", projectHandler);\n        //display project created\n        displayMngProj(projectName);\n        displayHandler(projectName);\n        projDisplay();\n\n    })\n}\n\n//display the form to add a new task\nconst displayTaskForm = () => {\n    const formContainer = document.querySelector(\".task-form\");\n\n    //the form\n    const theForm = document.createElement(\"form\");\n    theForm.setAttribute(\"action\", \"\");\n    theForm.setAttribute(\"id\", \"theForm\");\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"task-title\");\n    //title input\n    const inputTitle = document.createElement(\"input\");\n    inputTitle.setAttribute(\"id\", \"task-title\");\n    inputTitle.setAttribute(\"type\", \"text\");\n    inputTitle.setAttribute(\"placeholder\", \"Task Title\");\n    inputTitle.setAttribute(\"maxlength\", \"30\");\n    inputTitle.setAttribute(\"required\", \"true\");\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-desc\");\n    //description input\n    const inputDesc = document.createElement(\"input\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"type\", \"text\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"placeholder\", \"Task Description\");\n    inputDesc.setAttribute(\"maxlength\", \"120\");\n    //task due date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"dueDate\");\n    //due date input\n    const inputDate = document.createElement(\"input\");\n    inputDate.setAttribute(\"id\", \"dueDate\");\n    inputDate.setAttribute(\"type\", \"date\");\n    inputDate.setAttribute(\"name\", \"dueDate\");\n    inputDate.setAttribute(\"required\", \"true\");\n    //task priority\n    const taskPrior = document.createElement(\"div\");\n    taskPrior.classList.add(\"priority\");\n    //select priority\n    const selectPrior = document.createElement(\"select\");\n    selectPrior.setAttribute(\"id\", \"priority\");\n    selectPrior.setAttribute(\"name\", \"priority\");\n    selectPrior.setAttribute(\"required\", \"true\");\n    //options priority\n    //default\n    const optPrior = document.createElement(\"option\");\n    optPrior.setAttribute(\"value\", \"\");\n    optPrior.setAttribute(\"selected\", \"true\");\n    optPrior.setAttribute(\"disabled\", \"true\");\n    optPrior.setAttribute(\"hidden\", \"true\");\n    optPrior.innerHTML = \"Priority\";\n    //high\n    const optHigh = document.createElement(\"option\");\n    optHigh.setAttribute(\"value\", \"high\");\n    optHigh.innerHTML = \"High\";\n    //medium\n    const optMedium = document.createElement(\"option\");\n    optMedium.setAttribute(\"value\", \"medium\");\n    optMedium.innerHTML = \"Medium\";\n    //low\n    const optLow = document.createElement(\"option\");\n    optLow.setAttribute(\"value\", \"low\");\n    optLow.innerHTML = \"Low\";\n    //task cancel/save\n    const cancelSave = document.createElement(\"div\");\n    cancelSave.classList.add(\"cancel-save\");\n    //submit button\n    const saveBtn = document.createElement(\"button\");\n    saveBtn.setAttribute(\"type\", \"submit\");\n    saveBtn.setAttribute(\"id\", \"save\");\n    saveBtn.innerHTML = \"Save\";\n    //cancel\n    const taskCancel = document.createElement(\"div\");\n    taskCancel.classList.add(\"cancel-task\");\n    taskCancel.setAttribute(\"id\", \"cancel-task\");\n    //append\n    cancelSave.appendChild(saveBtn);\n    cancelSave.appendChild(taskCancel);\n    selectPrior.appendChild(optPrior);\n    selectPrior.appendChild(optHigh);\n    selectPrior.appendChild(optMedium);\n    selectPrior.appendChild(optLow);\n    taskPrior.appendChild(selectPrior);\n    taskDate.appendChild(inputDate);\n    taskDesc.appendChild(inputDesc);\n    taskTitle.appendChild(inputTitle);\n    theForm.appendChild(taskTitle);\n    theForm.appendChild(taskDesc);\n    theForm.appendChild(taskDate);\n    theForm.appendChild(taskPrior);\n    theForm.appendChild(cancelSave);\n    formContainer.appendChild(theForm);\n};\n\n//add the new project to the manager area\nconst displayMngProj = (projectName) => {\n    //projects\n    const projects = document.querySelector(\".projects\");\n    //new project manager\n    const newProject = document.createElement(\"div\");\n    newProject.classList.add(\"newProject\");\n    newProject.setAttribute(\"name\", projectName);\n    //proj container\n    const proj = document.createElement(\"div\");\n    proj.classList.add(\"proj\");\n    //proj title\n    const projTitle = document.createElement(\"div\");\n    projTitle.classList.add(\"proj-title\");\n    projTitle.innerHTML = projectName;\n    //projTitle.addEventListener(\"click\", displayProject);\n    //proj delete\n    const delProj = document.createElement(\"div\");\n    delProj.classList.add(\"proj-del\");\n    delProj.setAttribute(\"name\", projectName);\n    //add proj task\n    const projTask = document.createElement(\"div\");\n    projTask.classList.add(\"add-proj-task\");\n    projTask.setAttribute(\"name\", projectName);\n    projTask.innerHTML = \"+task\";\n    projTask.addEventListener(\"click\", taskHandler);\n    //append\n    proj.appendChild(projTitle);\n    proj.appendChild(delProj);\n    newProject.appendChild(proj);\n    newProject.appendChild(projTask);\n    //append before\n    const beforeThis = document.querySelector(\".projects\").firstChild;\n    projects.insertBefore(newProject, beforeThis);\n    //watch for delete project button\n    delProjBtn();\n}\n\n//watch for click to cancel add project\nconst cancelProject = () => {\n    //watch for click on cancel\n    document.getElementById(\"proj-cancel\").addEventListener(\"click\", ()=> {\n        //remove form\n        const projectForm = document.getElementById(\"projectForm\");\n        document.querySelector(\".project-form\").removeChild(projectForm);\n        //add event listeners back\n        document.querySelector(\".add-project\").addEventListener(\"click\", projectHandler);\n    })\n}\n\n//watch for click to cancel add task\nconst cancelTask = () => {\n    //watch for click on cancel\n    document.getElementById(\"cancel-task\").addEventListener(\"click\", ()=> {\n        //remove form\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        //add event listeners back\n        addListenersTasks();\n    })\n}\n\n//watch for click to delete task\nconst delTaskBtn = () => {\n    //watch for click delete task button\n    document.querySelectorAll(\".del-task\").forEach((task) => {\n        task.addEventListener(\"click\", ()=> delTask(task.getAttribute(\"value\")))\n    })\n}\n\n//watch for click to delete project\nconst delProjBtn = () => {\n    document.querySelectorAll(\".proj-del\").forEach((button) => {\n        button.addEventListener(\"click\", ()=> delProject(button.getAttribute(\"name\")));\n    })\n}\n\n//delete the selected project from the manager area and all the tasks of that project\nconst delProject = (projectName) => {\n    //delete project from manager area\n    document.querySelectorAll(\".newProject\").forEach((project) => {\n        if (project.getAttribute(\"name\") == projectName) {\n            document.querySelector(\".projects\").removeChild(project);\n            document.getElementById(\"proj-default\").click();\n        }\n    })\n    //delete all tasks of that project\n    toDo.forEach((task) => {\n        if (task.project == projectName) {\n            toDo.splice(toDo.indexOf(task), 1);\n        };\n    })\n}\n\n//delete the selected task of the array toDo\nconst delTask = (value) => {\n    document.querySelectorAll(\".task\").forEach((task) => {\n        if (task.getAttribute(\"value\") == value) {\n            toDo.splice(Number(task.getAttribute(\"value\")), 1);\n            displayTask();\n        }\n    })\n}\n\n//clear the main display of all tasks (before display again)\nconst clearTask = () => {\n        //clear display of tasks\n        const myTasks = document.querySelector(\".my-tasks\");\n        const clearTasks = document.querySelectorAll(\".task\");\n        clearTasks.forEach((task) => {\n            myTasks.removeChild(task);\n        })\n}\n\n//display all tasks of selected project\nconst displayTask = (projectName = \"default\") => {\n    clearTask();\n    projectName == \"Tasks\" ? projectName = \"default\" : projectName = projectName;\n    toDo.forEach((task) => {\n        if (task.project == projectName) {\n            const myTasks = document.querySelector(\".my-tasks\");\n            //Task\n            const theTask = document.createElement(\"div\");\n            //task done?\n            if (task.done == true) {\n                theTask.classList.add(\"task\");\n                theTask.classList.add(\"taskDone\");\n            }else {theTask.classList.add(\"task\");}\n            //task priority\n            if (task.priority == \"low\") {\n                theTask.style.borderLeft = \"12px solid green\";\n            }else if (task.priority == \"medium\") {\n                theTask.style.borderLeft = \"12px solid yellow\";\n            }else theTask.style.borderLeft = \"12px solid red\";\n            theTask.setAttribute(\"value\", toDo.indexOf(task));\n            //conclude option\n            const optConclude = document.createElement(\"div\");\n            optConclude.classList.add(\"conclude\");\n            //conclude input\n            const inputConclude = document.createElement(\"input\");\n            inputConclude.setAttribute(\"type\", \"checkbox\");\n            inputConclude.setAttribute(\"name\", \"conclude\");\n            inputConclude.setAttribute(\"id\", \"conclude\");\n            if (task.done == true) {\n                inputConclude.setAttribute(\"checked\", true);\n            };\n            //task title\n            const taskTitle = document.createElement(\"div\");\n            taskTitle.classList.add(\"tasks-title\");\n            taskTitle.innerHTML = task.title;\n            //task description\n            const taskDesc = document.createElement(\"div\");\n            taskDesc.classList.add(\"task-description\");\n            taskDesc.innerHTML = task.description;\n            //task date\n            const taskDate = document.createElement(\"div\");\n            taskDate.classList.add(\"task-date\");\n            const date = task.dueDate;\n            const dateArray = date.split(\"-\");\n            taskDate.innerHTML = dateArray[2] + \"/\" + dateArray[1] + \"/\" + dateArray[0];\n            //del task\n            const deleteTask = document.createElement(\"button\");\n            deleteTask.classList.add(\"del-task\");\n            deleteTask.setAttribute(\"value\", toDo.indexOf(task));\n            //append\n            optConclude.appendChild(inputConclude);\n            theTask.appendChild(optConclude);\n            theTask.appendChild(taskTitle);\n            theTask.appendChild(taskDesc);\n            theTask.appendChild(taskDate);\n            theTask.appendChild(deleteTask);\n            //append before\n            const beforeThis = document.querySelector(\".my-tasks\").firstChild;\n            myTasks.insertBefore(theTask, beforeThis);\n        }\n    })\n    delTaskBtn();\n    taskDone();\n}\n\n//watch for checkbox of task complete\nconst taskDone = () => {\n    document.querySelectorAll(\".task\").forEach((task) => {\n        task.querySelector(\"input[name=conclude]\").addEventListener(\"change\", function() {\n            if (this.checked) {\n                task.classList.add(\"taskDone\");\n                toDo[task.getAttribute(\"value\")].done = true;\n            }else {\n                task.classList.remove(\"taskDone\");\n                toDo[task.getAttribute(\"value\")].done = false;\n            };\n        })\n    })\n}\n\n//watch for select project\nconst projDisplay = () => {\n    document.querySelectorAll(\".proj-title\").forEach((project) => {\n        project.addEventListener(\"click\", ()=> {displayHandler(project.innerHTML)});\n    })\n}\n\n//Handles display of delete, add task and project title\nconst displayHandler = (projectName) => {\n    //Display Project Name\n    document.querySelector(\".main-title\").innerHTML = projectName;\n    //Display add task option in manager area\n    document.querySelectorAll(\".add-proj-task\").forEach((projTask) => {\n        if (projTask.getAttribute(\"name\") == \"default\" && projectName == \"Tasks\") {\n            projTask.style.display = \"block\";\n        }else if (projTask.getAttribute(\"name\") == projectName && projectName != \"Tasks\") {\n            projTask.style.display = \"block\";\n        }else {projTask.style.display = \"none\"};\n    })\n    //Display del project option\n    document.querySelectorAll(\".proj-del\").forEach((projDel) => {\n        if (projDel.getAttribute(\"name\") == \"default\" && projectName == \"Tasks\") {\n            projDel.style.display = \"block\";\n        }else if (projDel.getAttribute(\"name\") == projectName && projectName != \"Tasks\") {\n            projDel.style.display = \"block\";\n        }else {projDel.style.display = \"none\"};\n    })\n    //Display Tasks of Project only\n    displayTask(projectName);\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/Modules/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/tasks */ \"./src/Modules/tasks.js\");\n\n\nconst newTask = (()=> {\n    document.querySelector(\".new-task\").addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.taskHandler);\n})();\n\nconst newProjTask = (()=> {\n    document.querySelectorAll(\".add-proj-task\").forEach((taskProj) => {\n        taskProj.addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.taskHandler);\n    })\n})();\n\nconst newProject = (() => {\n    document.querySelector(\".add-project\").addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.projectHandler);\n})();\n\n(0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTask)();\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

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