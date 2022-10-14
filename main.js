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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTaskForm\": () => (/* binding */ displayTaskForm),\n/* harmony export */   \"saveTask\": () => (/* binding */ saveTask)\n/* harmony export */ });\nconst toDo = [];\n\n//task factory\nconst Task = (project, title, description, dueDate, priority, done) => {\n    return {project, title, description, dueDate, priority, done};\n}\n\nconst saveTask = () => {\n    document.getElementById(\"save\").addEventListener(\"submit\", ()=> {\n\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        let taskDone = false;\n        toDo.push(Task(\"default\", taskTitle, taskDesc, taskDate, taskPriority, taskDone));\n        const theForm = document.getElementById(\"theForm\");\n        document.querySelector(\".task-form\").removeChild(theForm);\n        console.log(toDo);\n    })\n};\n\nconst displayTaskForm = () => {\n    const formContainer = document.querySelector(\".task-form\");\n\n    //the form\n    const theForm = document.createElement(\"form\");\n    theForm.setAttribute(\"action\", \"\");\n    theForm.setAttribute(\"id\", \"theForm\");\n    //task title\n    const taskTitle = document.createElement(\"div\");\n    taskTitle.classList.add(\"task-title\");\n    //title input\n    const inputTitle = document.createElement(\"input\");\n    inputTitle.setAttribute(\"id\", \"task-title\");\n    inputTitle.setAttribute(\"type\", \"text\");\n    inputTitle.setAttribute(\"placeholder\", \"Task Title\");\n    inputTitle.setAttribute(\"maxlength\", \"30\");\n    inputTitle.setAttribute(\"required\", \"true\");\n    //task description\n    const taskDesc = document.createElement(\"div\");\n    taskDesc.classList.add(\"task-desc\");\n    //description input\n    const inputDesc = document.createElement(\"input\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"type\", \"text\");\n    inputDesc.setAttribute(\"id\", \"task-description\");\n    inputDesc.setAttribute(\"placeholder\", \"Task Description\");\n    //task due date\n    const taskDate = document.createElement(\"div\");\n    taskDate.classList.add(\"dueDate\");\n    //due date input\n    const inputDate = document.createElement(\"input\");\n    inputDate.setAttribute(\"id\", \"dueDate\");\n    inputDate.setAttribute(\"type\", \"date\");\n    inputDate.setAttribute(\"name\", \"dueDate\");\n    inputDate.setAttribute(\"required\", \"true\");\n    //task priority\n    const taskPrior = document.createElement(\"div\");\n    taskPrior.classList.add(\"priority\");\n    //select priority\n    const selectPrior = document.createElement(\"select\");\n    selectPrior.setAttribute(\"id\", \"priority\");\n    selectPrior.setAttribute(\"name\", \"priority\");\n    selectPrior.setAttribute(\"required\", \"true\");\n    //options priority\n    //default\n    const optPrior = document.createElement(\"option\");\n    optPrior.setAttribute(\"value\", \"\");\n    optPrior.setAttribute(\"selected\", \"true\");\n    optPrior.setAttribute(\"disabled\", \"true\");\n    optPrior.setAttribute(\"hidden\", \"true\");\n    optPrior.innerHTML = \"Priority\";\n    //high\n    const optHigh = document.createElement(\"option\");\n    optHigh.setAttribute(\"value\", \"high\");\n    optHigh.innerHTML = \"High\";\n    //medium\n    const optMedium = document.createElement(\"option\");\n    optMedium.setAttribute(\"value\", \"medium\");\n    optMedium.innerHTML = \"Medium\";\n    //low\n    const optLow = document.createElement(\"option\");\n    optLow.setAttribute(\"value\", \"low\");\n    optLow.innerHTML = \"Low\";\n    //task cancel/save\n    const cancelSave = document.createElement(\"div\");\n    cancelSave.classList.add(\"cancel-save\");\n    //submit button\n    const saveBtn = document.createElement(\"button\");\n    saveBtn.setAttribute(\"type\", \"submit\");\n    saveBtn.setAttribute(\"id\", \"save\");\n    saveBtn.innerHTML = \"Save\";\n    //cancel\n    const taskCancel = document.createElement(\"div\");\n    taskCancel.classList.add(\"cancel-task\");\n    //append\n    cancelSave.appendChild(saveBtn);\n    cancelSave.appendChild(taskCancel);\n    selectPrior.appendChild(optPrior);\n    selectPrior.appendChild(optHigh);\n    selectPrior.appendChild(optMedium);\n    selectPrior.appendChild(optLow);\n    taskPrior.appendChild(selectPrior);\n    taskDate.appendChild(inputDate);\n    taskDesc.appendChild(inputDesc);\n    taskTitle.appendChild(inputTitle);\n    theForm.appendChild(taskTitle);\n    theForm.appendChild(taskDesc);\n    theForm.appendChild(taskDate);\n    theForm.appendChild(taskPrior);\n    theForm.appendChild(cancelSave);\n    formContainer.appendChild(theForm);\n};\n\n\n\n//# sourceURL=webpack://odin-todo-list/./src/Modules/tasks.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/tasks */ \"./src/Modules/tasks.js\");\n\n\nconst newTask = (()=> {\n    document.querySelector(\".new-task\").addEventListener(\"click\", ()=> {\n        //task form\n        (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.displayTaskForm)();\n        (0,_Modules_tasks__WEBPACK_IMPORTED_MODULE_0__.saveTask)();\n    })\n})();\n\n/*\nconst saveTask = (()=> {\n    document.getElementById(\"save\").addEventListener(\"click\", ()=> {\n        let taskTitle = document.getElementById(\"task-title\").value;\n        let taskDesc = document.getElementById(\"task-description\").value;\n        let taskDate = document.getElementById(\"dueDate\").value;\n        let taskPriority = document.getElementById(\"priority\").value;\n        let taskDone = false;\n        if (taskTitle != \"\" && taskDate != \"\" && taskPriority != \"\") {\n            toDo.push(Task(\"default\", taskTitle, taskDesc, taskDate, taskPriority, taskDone));\n            document.querySelector(\".task-form\").style.display = \"none\";\n            document.getElementById(\"task-title\").value = \"\";\n            document.getElementById(\"task-description\").value = \"\";\n            document.getElementById(\"dueDate\").value = \"\";\n            document.getElementById(\"priority\").value = \"\";\n        }else return;\n    })\n})();\n*/\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

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