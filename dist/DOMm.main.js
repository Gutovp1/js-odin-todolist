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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ init)\n/* harmony export */ });\nfunction init(){\n    const titleBar = _createClassDiv('titleBar');\n    const taskSection = _createClassDiv('taskSection');\n    const upcomingSection = _createClassDiv('upcomingSection');\n    const projectSection = _createClassDiv('projectSection');\n    const containerBtn = document.createElement('div');\n    const btnNewProject = document.createElement('button');\n    const textBtnNewProject = document.createElement('span');\n\n    titleBar.textContent = 'TO DO LIST - JUST DO IT';\n\n    btnNewProject.textContent = '+';\n    textBtnNewProject.textContent = 'New Project';\n    \n    containerBtn.appendChild(btnNewProject);\n    containerBtn.appendChild(textBtnNewProject);\n    projectSection.appendChild(containerBtn);\n    document.body.appendChild(titleBar);\n    document.body.appendChild(taskSection);\n    document.body.appendChild(upcomingSection);\n    document.body.appendChild(projectSection);\n    \n    return;\n};\n\nfunction _createClassDiv(name){\n    const node = document.createElement('div')\n    node.classList.add(name);\n    return node;\n}\n\n//# sourceURL=webpack://todolist/./src/DOMmanipulation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/DOMmanipulation.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;