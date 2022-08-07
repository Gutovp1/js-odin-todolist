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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ application)\n/* harmony export */ });\nfunction application(arr){\n    console.log('app is here');\n    let aMust = toDos('Odin','finish this project','','high');\n    aMust.setProject('todo');\n    console.log(aMust.getProject());\n    console.log(aMust.getDueDate());\n    console.log(aMust.getPriority());\n}\n\n\n// export default function toDos(title, description, date,priority){\nfunction toDos( description, date,priority){\n    let project;\n    // const getTitle = () => title || 'No title';\n    const getDescription = () => description || 'No description';\n    const getPriority = () => priority || 'No priority';\n    const getDueDate = () =>  date || new Date();\n    const getProject = () => project || 'No project';\n    \n    const setProject = (nameProj) => project = nameProj;\n\n    return{\n        // getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        setProject,\n        getProject\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n// import './style.css';\n\n\n\n\nconst newTask = document.querySelector('.new-task');\nnewTask.addEventListener('click', () => alert('Hi'));\n// console.log('I am index.js');\n// init();\n(0,_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n// newProject();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => (/* binding */ createNewProject)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst taskContainer = document.querySelector('.task-section');\nconst projectContainer = document.querySelector('.project-section');\nconst btnNewProject = document.querySelector('.new-project');\n\nbtnNewProject.addEventListener('click', e => {\n    createFormProject();\n    // btnNewProject.toggleAttribute;\n});\n\nlet prim = _project__WEBPACK_IMPORTED_MODULE_1__.project;\n\nfunction createFormProject(){\n    const divProject = document.createElement('form');\n    divProject.innerHTML =`\n    <input type=\"text\" id=\"project-input\" placeholder=\"Project Name\" name=\"name\">\n    <br>\n    <button class=\"btn-project\" id=\"cancel-project\">Cancel</button>\n    <button class=\"btn-project\" id=\"add-project\">Add</button>\n    `;\n    projectContainer.appendChild(divProject);\n\n    let btnAdd = document.getElementById('add-project');\n    btnAdd.addEventListener('click', e => {\n        let projectName = document.getElementById('project-input');\n        e.preventDefault();\n        let prima = (0,_project__WEBPACK_IMPORTED_MODULE_1__.project)(projectName.value);\n        prim = prima;\n        taskContainer.appendChild(projectName);\n        console.log(prima)\n        divProject.remove();\n\n    });\n\n    let btnCancel = document.getElementById('cancel-project');\n    btnCancel.addEventListener('click', e =>{\n        e.preventDefault();\n        divProject.remove();\n    });\n\n        \n    }\n\n\n\n\nconst createNewProject = function(){\n        createFormProject();\n}\n\n    \n\n//# sourceURL=webpack://todolist/./src/interface.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"project\": () => (/* binding */ project)\n/* harmony export */ });\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\nfunction project(name = ''){\n    const getName = () => {return name;}\n    const setName = (newName) => {name = newName};\n    let tasks = ['do the math','do the dishes'];\n    return {getName, tasks}\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/project.js?");

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