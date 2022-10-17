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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskHandler\": () => (/* binding */ taskHandler)\n/* harmony export */ });\nconst toDo = [];\n\n//task factory\nconst Task = (project, title, description, dueDate, priority) => {\n    return {project, title, description, dueDate, priority};\n}\n\nconst saveTask = () => {\n    document.getElementById(\"save\").addEventListener(\"click\", () => {\n        //e.preventDefault(); not working for unknow reason\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        toDo.push(Task(\"default\", taskTitle, taskDesc, taskDate, taskPriority));\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        document.querySelector(\".new-task\").addEventListener(\"click\", taskHandler);\n        displayTask();\n        console.log(toDo);\n    })\n};\n\nconst taskHandler = () => {\n    document.querySelector(\".new-task\").removeEventListener(\"click\", taskHandler);\n    displayTaskForm();\n    cancelTask();\n    saveTask();\n}\n\nconst displayTaskForm = () => {\n    const formContainer = document.querySelector(\".task-form\");\n\n    //the form\n    const theForm = document.createElement(\"form\");\n    theForm.setAttribute(\"action\", \"\");\n    theForm.setAttribute(\"id\", \"theForm\");\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"task-title\");\n    //title input\n    const inputTitle = document.createElement(\"input\");\n    inputTitle.setAttribute(\"id\", \"task-title\");\n    inputTitle.setAttribute(\"type\", \"text\");\n    inputTitle.setAttribute(\"placeholder\", \"Task Title\");\n    inputTitle.setAttribute(\"maxlength\", \"30\");\n    inputTitle.setAttribute(\"required\", \"true\");\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-desc\");\n    //description input\n    const inputDesc = document.createElement(\"input\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"type\", \"text\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"placeholder\", \"Task Description\");\n    inputDesc.setAttribute(\"maxlength\", \"120\");\n    //task due date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"dueDate\");\n    //due date input\n    const inputDate = document.createElement(\"input\");\n    inputDate.setAttribute(\"id\", \"dueDate\");\n    inputDate.setAttribute(\"type\", \"date\");\n    inputDate.setAttribute(\"name\", \"dueDate\");\n    inputDate.setAttribute(\"required\", \"true\");\n    //task priority\n    const taskPrior = document.createElement(\"div\");\n    taskPrior.classList.add(\"priority\");\n    //select priority\n    const selectPrior = document.createElement(\"select\");\n    selectPrior.setAttribute(\"id\", \"priority\");\n    selectPrior.setAttribute(\"name\", \"priority\");\n    selectPrior.setAttribute(\"required\", \"true\");\n    //options priority\n    //default\n    const optPrior = document.createElement(\"option\");\n    optPrior.setAttribute(\"value\", \"\");\n    optPrior.setAttribute(\"selected\", \"true\");\n    optPrior.setAttribute(\"disabled\", \"true\");\n    optPrior.setAttribute(\"hidden\", \"true\");\n    optPrior.innerHTML = \"Priority\";\n    //high\n    const optHigh = document.createElement(\"option\");\n    optHigh.setAttribute(\"value\", \"high\");\n    optHigh.innerHTML = \"High\";\n    //medium\n    const optMedium = document.createElement(\"option\");\n    optMedium.setAttribute(\"value\", \"medium\");\n    optMedium.innerHTML = \"Medium\";\n    //low\n    const optLow = document.createElement(\"option\");\n    optLow.setAttribute(\"value\", \"low\");\n    optLow.innerHTML = \"Low\";\n    //task cancel/save\n    const cancelSave = document.createElement(\"div\");\n    cancelSave.classList.add(\"cancel-save\");\n    //submit button\n    const saveBtn = document.createElement(\"button\");\n    saveBtn.setAttribute(\"type\", \"submit\");\n    saveBtn.setAttribute(\"id\", \"save\");\n    saveBtn.innerHTML = \"Save\";\n    //cancel\n    const taskCancel = document.createElement(\"div\");\n    taskCancel.classList.add(\"cancel-task\");\n    taskCancel.setAttribute(\"id\", \"cancel-task\");\n    //append\n    cancelSave.appendChild(saveBtn);\n    cancelSave.appendChild(taskCancel);\n    selectPrior.appendChild(optPrior);\n    selectPrior.appendChild(optHigh);\n    selectPrior.appendChild(optMedium);\n    selectPrior.appendChild(optLow);\n    taskPrior.appendChild(selectPrior);\n    taskDate.appendChild(inputDate);\n    taskDesc.appendChild(inputDesc);\n    taskTitle.appendChild(inputTitle);\n    theForm.appendChild(taskTitle);\n    theForm.appendChild(taskDesc);\n    theForm.appendChild(taskDate);\n    theForm.appendChild(taskPrior);\n    theForm.appendChild(cancelSave);\n    formContainer.appendChild(theForm);\n};\n\nconst cancelTask = () => {\n    document.getElementById(\"cancel-task\").addEventListener(\"click\", ()=> {\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        document.querySelector(\".new-task\").addEventListener(\"click\", taskHandler);\n    })\n}\n\nconst delTaskBtn = () => {\n    document.querySelectorAll(\".del-task\").forEach((task) => {\n        task.addEventListener(\"click\", ()=> delTask(task.getAttribute(\"value\")))\n    })\n}\n\nconst delTask = (value) => {\n    document.querySelectorAll(\".task\").forEach((task) => {\n        if (task.getAttribute(\"value\") == value) {\n            toDo.splice(Number(task.getAttribute(\"value\")), 1);\n            displayTask();\n        }\n    })\n}\n\nconst displayTask = () => {\n    //clear\n    const myTasks = document.querySelector(\".my-tasks\");\n    const clearTasks = document.querySelectorAll(\".task\");\n    clearTasks.forEach((task) => {\n        myTasks.removeChild(task);\n    })\n    toDo.forEach((task) => {\n        console.log(task);\n        const myTasks = document.querySelector(\".my-tasks\");\n        //Task\n        const theTask = document.createElement(\"div\");\n        theTask.classList.add(\"task\");\n        if (task.priority == \"low\") {\n            theTask.style.borderLeft = \"12px solid green\";\n        }else if (task.priority == \"medium\") {\n            theTask.style.borderLeft = \"12px solid yellow\";\n        }else theTask.style.borderLeft = \"12px solid red\";\n        theTask.setAttribute(\"value\", toDo.indexOf(task));\n        //conclude option\n        const optConclude = document.createElement(\"div\");\n        optConclude.classList.add(\"conclude\");\n        //conclude input\n        const inputConclude = document.createElement(\"input\");\n        inputConclude.setAttribute(\"type\", \"checkbox\");\n        inputConclude.setAttribute(\"name\", \"conclude\");\n        inputConclude.setAttribute(\"id\", \"conclude\");\n        //task title\n        const taskTitle = document.createElement(\"div\");\n        taskTitle.classList.add(\"tasks-title\");\n        taskTitle.innerHTML = task.title;\n        //task description\n        const taskDesc = document.createElement(\"div\");\n        taskDesc.classList.add(\"task-description\");\n        taskDesc.innerHTML = task.description;\n        //task date\n        const taskDate = document.createElement(\"div\");\n        taskDate.classList.add(\"task-date\");\n        taskDate.innerHTML = task.dueDate;\n        //del task\n        const deleteTask = document.createElement(\"button\");\n        deleteTask.classList.add(\"del-task\");\n        deleteTask.setAttribute(\"value\", toDo.indexOf(task));\n        //append\n        optConclude.appendChild(inputConclude);\n        theTask.appendChild(optConclude);\n        theTask.appendChild(taskTitle);\n        theTask.appendChild(taskDesc);\n        theTask.appendChild(taskDate);\n        theTask.appendChild(deleteTask);\n        //myTasks.appendChild(theTask);\n        //append before\n        const beforeThis = document.querySelector(\".my-tasks\").firstChild;\n        myTasks.insertBefore(theTask, beforeThis);\n    })\n    delTaskBtn();\n}\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/Modules/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/tasks */ \"./src/Modules/tasks.js\");\n\n\nconst newTask = (()=> {\n    document.querySelector(\".new-task\").addEventListener(\"click\", _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.taskHandler);\n})();\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

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