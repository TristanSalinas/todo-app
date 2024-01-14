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

/***/ "./src/dataController.js":
/*!*******************************!*\
  !*** ./src/dataController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dataController: () => (/* binding */ dataController)\n/* harmony export */ });\nfunction projectFact(projectName) {\r\n  const name = projectName;\r\n  let dueDate = \"undefined\";\r\n  let description = \"A super cool project where...\";\r\n  let todoTasks = [\"mon premier est une tache\", \"mon second une grosse blate\"];\r\n  let doneTasks = [];\r\n  function setDuedate(date) {\r\n    dueDate = date;\r\n  }\r\n  return { name, dueDate, description, todoTasks, doneTasks };\r\n}\r\n\r\nfunction dataController() {\r\n  const projectsArr = [];\r\n\r\n  function getProjects() {\r\n    return projectsArr;\r\n  }\r\n  function getProject(projectName) {}\r\n\r\n  function addProject(projectName) {\r\n    const newProject = projectFact(projectName);\r\n    projectsArr.push(newProject);\r\n    return newProject;\r\n  }\r\n\r\n  return { getProjects, addProject };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://copy/./src/dataController.js?");

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domController: () => (/* binding */ domController)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _domElmtFactories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElmtFactories */ \"./src/domElmtFactories.js\");\n\r\n\r\n\r\nfunction domController() {\r\n  //---- fetching base ui ----//\r\n  const projectsNav = document.querySelector(\"#projects-nav\");\r\n  const content = document.querySelector(\"#content\");\r\n  const homeBtn = document.querySelector(\"#home\");\r\n  homeBtn.addEventListener(\"click\", () => {\r\n    ___WEBPACK_IMPORTED_MODULE_0__.application.contentSwitchToGrid();\r\n  });\r\n\r\n  const quickAddfield = document.querySelector(\"#quick-add-field\");\r\n  const quickAddBtn = document.querySelector(\"#quick-add-btn\");\r\n  quickAddBtn.addEventListener(\"click\", () => {\r\n    if (quickAddfield.value !== \"\") {\r\n      ___WEBPACK_IMPORTED_MODULE_0__.application.add(quickAddfield.value);\r\n      quickAddfield.value = \"\";\r\n    }\r\n  });\r\n\r\n  //-----actuals methods ----//\r\n\r\n  function init(projectArr) {\r\n    projectArr.forEach((project) => {\r\n      content.append(_domElmtFactories__WEBPACK_IMPORTED_MODULE_1__.element.createCard(project));\r\n      projectsNav.append(_domElmtFactories__WEBPACK_IMPORTED_MODULE_1__.element.createNavLink(project));\r\n    });\r\n  }\r\n\r\n  function clearContent() {\r\n    while (content.firstChild) {\r\n      content.removeChild(content.firstChild);\r\n    }\r\n  }\r\n  function clearNav() {\r\n    while (projectsNav.firstChild) {\r\n      projectsNav.removeChild(projectsNav.firstChild);\r\n    }\r\n  }\r\n\r\n  function updateDisplay(projectArr) {\r\n    clearNav();\r\n    clearContent();\r\n    init(projectArr);\r\n  }\r\n\r\n  function displayGrid(projectArr) {\r\n    clearContent();\r\n    content.append(_domElmtFactories__WEBPACK_IMPORTED_MODULE_1__.element.createProjectGrid(projectArr));\r\n  }\r\n\r\n  function displayDetails(project) {\r\n    clearContent();\r\n    content.append(_domElmtFactories__WEBPACK_IMPORTED_MODULE_1__.element.createProjectPage(project));\r\n  }\r\n\r\n  return { init, displayGrid, displayDetails, updateDisplay };\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://copy/./src/domController.js?");

/***/ }),

/***/ "./src/domElmtFactories.js":
/*!*********************************!*\
  !*** ./src/domElmtFactories.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   element: () => (/* binding */ element)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n\r\nfunction elementfactory() {\r\n  function createProjectPage(project) {\r\n    /*-------------TITLE ---------*/\r\n    const projectPage = document.createElement(\"div\");\r\n    projectPage.classList.add(\"project-page\");\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = project.name;\r\n    projectPage.append(title);\r\n\r\n    /*-------------DESCRIPTION------------------------------*/\r\n\r\n    const descriptionDiv = document.createElement(\"div\");\r\n    descriptionDiv.classList.add(\"description-container\");\r\n    const textarea = document.createElement(\"textarea\");\r\n    textarea.classList.add(\"description-textarea\");\r\n    textarea.value = project.description;\r\n    textarea.addEventListener(\"blur\", () => {\r\n      project.description = textarea.value; //save description when element lose focus\r\n    });\r\n    descriptionDiv.append(textarea);\r\n    projectPage.append(descriptionDiv);\r\n\r\n    /*----------------------------TASKS-------------------------------*/\r\n    const tasksWrapper = document.createElement(\"div\");\r\n    tasksWrapper.classList.add(\"tasks-wrapper\");\r\n\r\n    /* --------------TODO ------------------------*/\r\n\r\n    const todoTasksWrapper = document.createElement(\"div\");\r\n\r\n    const todoh2 = document.createElement(\"h2\");\r\n    todoh2.textContent = \"TO DO :\";\r\n\r\n    const addTodoField = document.createElement(\"input\");\r\n    addTodoField.classList.add(\"add-todo-field\");\r\n    addTodoField.type = \"text\";\r\n    addTodoField.placeholder = \"New task\";\r\n\r\n    const todoTasksList = document.createElement(\"div\");\r\n    todoTasksList.classList.add(\"todo-tasks-list\");\r\n    todoTasksWrapper.append(todoh2, addTodoField, todoTasksList);\r\n\r\n    /*---------------DONE -----------------*/\r\n\r\n    const doneTasksWrapper = document.createElement(\"div\");\r\n    doneTasksWrapper.classList.add(\"done-tasks-wrapper\");\r\n\r\n    const doneh2 = document.createElement(\"h2\");\r\n    doneh2.textContent = \"DONE :\";\r\n\r\n    const archivebtn = document.createElement(\"button\");\r\n    archivebtn.textContent = \"Archive checked tasks !\";\r\n\r\n    const doneTasksList = document.createElement(\"div\");\r\n    doneTasksList.classList.add(\"done-tasks-list\");\r\n\r\n    doneTasksWrapper.append(archivebtn, doneh2, doneTasksList);\r\n\r\n    tasksWrapper.append(todoTasksWrapper, doneTasksWrapper);\r\n\r\n    projectPage.append(tasksWrapper);\r\n\r\n    /*----------------TASKS LOGIC DECLARATION -------------*/\r\n\r\n    // TODO Tasks\r\n\r\n    //createTaskLine(task: String, taskId: unique number) => taskLine: DOMElement\r\n    function createTaskLine(task, taskId) {\r\n      const taskLine = document.createElement(\"div\");\r\n      taskLine.classList.add(\"task\");\r\n\r\n      const checkbox = document.createElement(\"input\");\r\n      checkbox.type = \"checkbox\";\r\n      checkbox.id = \"\" + taskId;\r\n      const label = document.createElement(\"label\");\r\n      label.htmlFor = \"\" + taskId;\r\n      label.textContent = task;\r\n\r\n      const removeBtn = document.createElement(\"button\");\r\n      removeBtn.textContent = \"Remove\";\r\n      removeBtn.addEventListener(\"click\", () => {\r\n        project.todoTasks.splice(taskId, 1);\r\n        updateTaskList();\r\n      });\r\n\r\n      taskLine.append(checkbox, label, removeBtn);\r\n      return taskLine;\r\n    }\r\n\r\n    function clearTasksList() {\r\n      while (todoTasksList.firstChild) {\r\n        todoTasksList.removeChild(todoTasksList.firstChild);\r\n      }\r\n    }\r\n\r\n    function initTasksList() {\r\n      project.todoTasks.forEach((task, taskIndex) => {\r\n        todoTasksList.append(createTaskLine(task, taskIndex));\r\n      });\r\n    }\r\n\r\n    function updateTaskList() {\r\n      clearTasksList();\r\n      initTasksList();\r\n    }\r\n\r\n    // DONE\r\n\r\n    function createDoneTaskLine(task, taskId) {\r\n      const doneTaskLine = document.createElement(\"div\");\r\n      doneTaskLine.classList.add(\"done-task-line\");\r\n      const p = document.createElement(\"p\");\r\n      p.textContent = task;\r\n      const unarchivebtn = document.createElement(\"button\");\r\n      unarchivebtn.textContent = \"unarchive\";\r\n      unarchivebtn.addEventListener(\"click\", () => {\r\n        project.todoTasks.push(project.doneTasks.splice(taskId, 1)[0]);\r\n        updateDoneTaskList();\r\n        updateTaskList();\r\n      });\r\n      const removeBtn = document.createElement(\"button\");\r\n      removeBtn.textContent = \"Remove\";\r\n      removeBtn.addEventListener(\"click\", () => {\r\n        project.doneTasks.splice(taskId, 1);\r\n        updateDoneTaskList();\r\n      });\r\n\r\n      doneTaskLine.append(p, unarchivebtn, removeBtn);\r\n      return doneTaskLine;\r\n    }\r\n    function clearDoneTasksList() {\r\n      while (doneTasksList.firstChild) {\r\n        doneTasksList.removeChild(doneTasksList.firstChild);\r\n      }\r\n    }\r\n    function initDoneTaskList() {\r\n      project.doneTasks.forEach((task, taskIndex) => {\r\n        doneTasksList.append(createDoneTaskLine(task, taskIndex));\r\n      });\r\n    }\r\n    function updateDoneTaskList() {\r\n      clearDoneTasksList();\r\n      initDoneTaskList();\r\n    }\r\n    /*-----------------TASK LOGIC USAGE ------------*/\r\n\r\n    initTasksList();\r\n    initDoneTaskList();\r\n    archivebtn.addEventListener(\"click\", function recursiveSrch() {\r\n      const todoarr = Array.from(todoTasksList.querySelectorAll(\".task\"));\r\n      const idarr = [];\r\n      todoarr.forEach((task) => {\r\n        if (task.firstChild.checked) {\r\n          const id = parseInt(task.firstChild.id);\r\n          idarr.unshift(id);\r\n          project.doneTasks.push(project.todoTasks[id]);\r\n        }\r\n      });\r\n      idarr.forEach((id) => {\r\n        project.todoTasks.splice(id, 1);\r\n      });\r\n\r\n      updateTaskList();\r\n      updateDoneTaskList();\r\n    });\r\n    addTodoField.addEventListener(\"keydown\", (event) => {\r\n      if (\r\n        event.key === \"Enter\" &&\r\n        document.activeElement === addTodoField &&\r\n        addTodoField.value !== \"\"\r\n      ) {\r\n        project.todoTasks.push(addTodoField.value);\r\n        addTodoField.value = \"\";\r\n        updateTaskList();\r\n      }\r\n    });\r\n\r\n    return projectPage;\r\n  }\r\n\r\n  function createCard(project) {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"project-card\");\r\n    const title = document.createElement(\"h2\");\r\n    title.textContent = project.name;\r\n    card.append(title);\r\n    card.addEventListener(\"click\", () => {\r\n      ___WEBPACK_IMPORTED_MODULE_0__.application.contentSwitchTo(project);\r\n    });\r\n    return card;\r\n  }\r\n\r\n  function createProjectGrid(projectArr) {\r\n    const grid = document.createElement(\"div\");\r\n    grid.classList.add(\"project-grid\");\r\n    projectArr.forEach((project) => {\r\n      grid.append(element.createCard(project));\r\n    });\r\n    return grid;\r\n  }\r\n\r\n  function createNavLink(project) {\r\n    const title = document.createElement(\"h3\");\r\n    title.textContent = project.name;\r\n    title.addEventListener(\"click\", () => {\r\n      ___WEBPACK_IMPORTED_MODULE_0__.application.contentSwitchTo(project);\r\n    });\r\n    return title;\r\n  }\r\n\r\n  return { createCard, createNavLink, createProjectPage, createProjectGrid };\r\n}\r\n\r\nconst element = elementfactory();\r\n\r\n\r\n\n\n//# sourceURL=webpack://copy/./src/domElmtFactories.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   application: () => (/* binding */ application)\n/* harmony export */ });\n/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domController */ \"./src/domController.js\");\n/* harmony import */ var _dataController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataController */ \"./src/dataController.js\");\n\r\n\r\n\r\nfunction appController() {\r\n  let curView = \"projectGrid\";\r\n  const data = (0,_dataController__WEBPACK_IMPORTED_MODULE_1__.dataController)();\r\n  const page = (0,_domController__WEBPACK_IMPORTED_MODULE_0__.domController)();\r\n\r\n  function contentSwitchTo(project) {\r\n    if (curView !== project.name) {\r\n      page.displayDetails(project);\r\n      curView = project.name;\r\n    }\r\n  }\r\n  function contentSwitchToGrid() {\r\n    page.displayGrid(data.getProjects());\r\n    curView = \"projectGrid\";\r\n  }\r\n\r\n  function add(projectName) {\r\n    const project = data.addProject(projectName); // addProject() => add project to storage and return the newly created project.\r\n    page.updateDisplay(data.getProjects());\r\n    contentSwitchTo(project);\r\n  }\r\n\r\n  add(\"Project_1\");\r\n  add(\"Project_2\");\r\n  add(\"Project_3\");\r\n  add(\"Project_4\");\r\n\r\n  return { data, page, contentSwitchTo, contentSwitchToGrid, add };\r\n}\r\n\r\nconst application = appController();\r\n\r\n\r\n\n\n//# sourceURL=webpack://copy/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;