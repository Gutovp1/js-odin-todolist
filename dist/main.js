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

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\n\nconst containerTask = document.querySelector(\".task-section\");\nconst formTask = document.querySelector(\".form-task\");\nconst btnNewTask = document.querySelector(\".new-task\");\nconst btnAddTask = document.querySelector(\".btn-add-task\");\nconst btnCancelTask = document.querySelector(\".btn-cancel-task\");\nlet titleInput = document.querySelector(\"#titleTask\");\nlet detailsInput = document.querySelector(\"#detailsTask\");\n\nlet project1 = new _project__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"teste\");\n\nbtnAddTask.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  let task1 = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](titleInput.value, detailsInput.value);\n  project1.addTask(task1);\n  (0,_interface__WEBPACK_IMPORTED_MODULE_0__.updateTasksList)(project1.tasks);\n  formTask.reset();\n});\n\nbtnCancelTask.addEventListener(\"click\", (e) => {\n  e.preventDefault();\n  formTask.reset();\n  formTask.classList.toggle(\"hidden\");\n});\n\nbtnNewTask.addEventListener(\"click\", () => formTask.classList.toggle(\"hidden\"));\n\n\n//# sourceURL=webpack://todolist/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n// init();\n// newProject();\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject),\n/* harmony export */   \"updateTasksList\": () => (/* binding */ updateTasksList)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst taskContainer = document.querySelector(\".task-section\");\nconst ulTasks = document.querySelector(\".ul-container\");\nconst projectContainer = document.querySelector(\".project-section\");\nconst btnNewProject = document.querySelector(\".new-project\");\nconst listOfProjects = document.querySelector(\".list-projects\");\nconst projectTitleCurrent = document.querySelector(\".project-title-dash\");\nconst btnNewTask = document.querySelector(\".new-task\");\n\nlet newarr = [];\n\nconst updateTasksList = (array) => {\n  ulTasks.innerHTML = \"\"; //clear the list beforehand\n  console.log(array);\n  array.forEach((obj, index) => {\n    let li = document.createElement(\"li\");\n    li.innerText = obj.title;\n    li.setAttribute(\"data-key\", obj.id);\n    // li.setAttribute('data-key', index);\n    // console.log('ID do objeto= ' +obj.id);\n\n    const btnDeleteTask = document.createElement(\"button\");\n    btnDeleteTask.classList.add(\"btn-delete-task\");\n    btnDeleteTask.textContent = \"X\";\n    btnDeleteTask.onclick = (e) => {\n      console.log(\n        array.findIndex(\n          (task) => task.id == Number(e.target.parentElement.dataset.key)\n        )\n      );\n      console.log(\n        \"ParentElementID: \" + Number(e.target.parentElement.dataset.key)\n      );\n      console.log(obj.id);\n      // let aux = array.findIndex ((task) => task.id == Number(e.target.parentElement.dataset.key));\n      array = array.filter(\n        (task) => task.id !== Number(e.target.parentElement.dataset.key)\n      );\n      console.log(array);\n      btnDeleteTask.parentElement.outerHTML = \"\";\n    };\n    // btnDeleteTask.classList.add('hidden');});\n    li.append(btnDeleteTask);\n    ulTasks.append(li);\n  });\n  // ulTasks.addEventListener('click',e =>{\n  //     if(e.target.classList.contains('btn-delete-task')){\n  //         let auxInd = array.findIndex( (item) => { return item.id == Number(e.target.parentElement.dataset.key)});\n  //         console.log(auxInd);\n  //         console.log(array[auxInd]);\n  //         newarr= array.splice(auxInd,1);\n  //          console.log(newarr);\n  //         e.target.parentElement.remove();\n  //         array = newarr;\n  //     }\n  // });\n\n  // const find2delete = function(index, obj1){\n};\n\nbtnNewProject.onclick = createFormProject;\n\nfunction createFormProject() {\n  btnNewProject.classList.toggle(\"hidden\");\n  const formProject = document.createElement(\"form\");\n  formProject.innerHTML = `\n    <input type=\"text\" id=\"project-input\" placeholder=\"Project Name\" name=\"name\">\n    <button class=\"btn-project\" id=\"cancel-project\">Cancel</button>\n    <button class=\"btn-project\" id=\"add-project\">Add</button>\n    `;\n  projectContainer.insertBefore(formProject, listOfProjects);\n\n  let btnAddProject = document.getElementById(\"add-project\");\n  const projectName = document.getElementById(\"project-input\");\n\n  btnAddProject.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    let prima = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName.value);\n    projectTitleCurrent.textContent = projectName.value;\n    taskContainer.insertBefore(projectTitleCurrent, btnNewTask);\n    // taskContainer.appendChild(projectTitleCurrent);\n    console.log(prima.getName());\n    formProject.remove();\n    btnNewProject.classList.toggle(\"hidden\");\n  });\n\n  let btnCancel = document.getElementById(\"cancel-project\");\n  btnCancel.addEventListener(\"click\", (e) => {\n    e.preventDefault();\n    formProject.remove();\n    btnNewProject.classList.toggle(\"hidden\");\n  });\n}\n\nconst createNewProject = function () {\n  createFormProject();\n  listProject();\n};\n\n\n\n\n//# sourceURL=webpack://todolist/./src/interface.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n// import application from \"./app\";\n\nclass Project {\n  constructor(title) {\n    this.name = title;\n    this.tasks = [];\n  }\n  getName = () => {\n    return this.title;\n  };\n  setName = (newTitle) => {\n    this.title = newTitle;\n  };\n  addTask = (task) => {\n    this.tasks.push(task);\n  };\n  removeTask = () => {\n    this.tasks.pop();\n  };\n\n  // return {getName, setName, tasks, addTask, removeTask}\n}\n\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n// import app from \"./app\";\n\nclass Task {\n  constructor(title, details) {\n    this.title = title;\n    this.details = details;\n    this.dueDate = Date;\n    this.priority = \"low\";\n    this.id = Date.now();\n  }\n  // getName()\n}\n\n// function taskObj( title, details, date, priority){\n//     return{\n//         title,\n//         id : Date.now(),\n//         details,\n//         date: Date,\n//         priority: 'low',\n//     }\n// }\n\n\n//# sourceURL=webpack://todolist/./src/task.js?");

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