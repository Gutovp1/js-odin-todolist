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

/***/ "./src/DOMmanipulation.js":
/*!********************************!*\
  !*** ./src/DOMmanipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n\n\nfunction init(){\n    const titleBar = _createClassDiv('titleBar');\n    const taskSection = _createClassDiv('taskSection');\n    const upcomingSection = _createClassDiv('upcomingSection');\n    const projectSection = _createClassDiv('projectSection');\n    const containerBtn = document.createElement('div');\n    const btnNewProject = document.createElement('button');\n    const textBtnNewProject = document.createElement('span');\n\n    const btnTask = document.createElement('input');\n    btnTask.setAttribute('type','button');\n    btnTask.onclick = _newForm;\n    btnTask.value = '+';\n    \n    titleBar.textContent = 'TO DO LIST - JUST DO IT';\n\n    btnNewProject.textContent = '+';\n    textBtnNewProject.textContent = 'New Project';\n    \n    btnNewProject.addEventListener('click', () => console.log('Hi'));\n    \n    containerBtn.appendChild(btnNewProject);\n    containerBtn.appendChild(textBtnNewProject);\n    projectSection.appendChild(containerBtn);\n    document.body.appendChild(titleBar);\n    document.body.appendChild(taskSection);\n    taskSection.appendChild(btnTask);\n    document.body.appendChild(upcomingSection);\n    document.body.appendChild(projectSection);\n    \n    function _newForm(){\n        const nForm = document.createElement('form');\n        const task = document.createElement('input');\n        task.setAttribute('type','text');\n        nForm.appendChild(task);\n        taskSection.append(nForm);\n    }\n\n    return;\n};\n\nfunction _createClassDiv(name){\n    const node = document.createElement('div')\n    node.classList.add(name);\n    return node;\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/DOMmanipulation.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ application)\n/* harmony export */ });\nfunction application(arr){\n    console.log('app is here');\n    let aMust = toDos('Odin','finish this project','','high');\n    aMust.setProject('todo');\n    console.log(aMust.getProject());\n    console.log(aMust.getDueDate());\n    console.log(aMust.getPriority());\n}\n\n\n// export default function toDos(title, description, date,priority){\nfunction toDos(title, description, date,priority){\n    let project;\n    const getTitle = () => title || 'No title';\n    const getDescription = () => description || 'No description';\n    const getPriority = () => priority || 'No priority';\n    const getDueDate = () =>  date || new Date();\n    const getProject = () => project || 'No project';\n    \n    const setProject = (nameProj) => project = nameProj;\n\n    return{\n        getTitle,\n        getDescription,\n        getDueDate,\n        getPriority,\n        setProject,\n        getProject\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMmanipulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMmanipulation */ \"./src/DOMmanipulation.js\");\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\n// import './style.css';\n\n\n\nconsole.log('I am index.js');\n// init();\n(0,_app_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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