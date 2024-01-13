import { application as app } from ".";

function elementfactory() {
  function createProjectPage(project) {
    /*-------------TITLE ---------*/
    const projectPage = document.createElement("div");
    projectPage.classList.add("project-page");

    const title = document.createElement("h1");
    title.textContent = project.name;
    projectPage.append(title);

    /*-------------DESCRIPTION------------------------------*/

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description-container");
    const textarea = document.createElement("textarea");
    textarea.classList.add("description-textarea");
    textarea.value = project.description;
    textarea.addEventListener("blur", () => {
      project.description = textarea.value; //save description when element lose focus
    });
    /*textarea.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && document.activeElement === addTodoField) {
        textarea.blur(); //enter forcefully make element lose focus triggering the first event listenned ie saving
      }
    });*/
    descriptionDiv.append(textarea);
    projectPage.append(descriptionDiv);

    /*----------------------------TASKS-------------------------------*/

    /* --------------TODO ------------------------*/

    const todoTasksWrapper = document.createElement("div");

    const todoh2 = document.createElement("h2");
    todoh2.textContent = "TO DO :";

    const addTodoField = document.createElement("input");
    addTodoField.classList.add("add-todo-field");
    addTodoField.type = "text";
    addTodoField.placeholder = "New task";

    const todoTasksList = document.createElement("div");
    todoTasksList.classList.add("todo-tasks-list");
    todoTasksWrapper.append(todoh2, addTodoField, todoTasksList);

    projectPage.append(todoTasksWrapper);

    /*----------------TASKS LOGIC DECLARATION -------------*/

    //createTaskLine(task: String, taskId: unique number) => taskLine: DOMElement
    function createTaskLine(task, taskId) {
      const taskLine = document.createElement("div");
      taskLine.classList.add("task");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "" + taskId;
      const label = document.createElement("label");
      label.htmlFor = "" + taskId;
      label.textContent = task;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        project.todoTasks.splice(taskId, 1);
        updateTaskList();
      });

      taskLine.append(checkbox, label, removeBtn);
      return taskLine;
    }

    function clearTasksList() {
      while (todoTasksList.firstChild) {
        todoTasksList.removeChild(todoTasksList.firstChild);
      }
    }

    function initTasksList() {
      project.todoTasks.forEach((task, taskIndex) => {
        todoTasksList.append(createTaskLine(task, taskIndex));
      });
    }

    function updateTaskList() {
      clearTasksList();
      initTasksList();
    }

    /*-----------------TASK LOGIC USAGE ------------*/

    initTasksList();

    addTodoField.addEventListener("keydown", function (event) {
      if (
        event.key === "Enter" &&
        document.activeElement === addTodoField &&
        addTodoField.value !== ""
      ) {
        project.todoTasks.push(addTodoField.value);
        addTodoField.value = "";
        updateTaskList();
      }
    });

    const doneTasksList = document.createElement("div");

    return projectPage;
  }

  function createCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");
    const title = document.createElement("h2");
    title.textContent = project.name;
    card.append(title);
    card.addEventListener("click", () => {
      app.contentSwitchTo(project);
    });
    return card;
  }

  function createProjectGrid(projectArr) {
    const grid = document.createElement("div");
    grid.classList.add("project-grid");
    projectArr.forEach((project) => {
      grid.append(element.createCard(project));
    });
    return grid;
  }

  function createNavLink(project) {
    const title = document.createElement("h3");
    title.textContent = project.name;
    title.addEventListener("click", () => {
      app.contentSwitchTo(project);
    });
    return title;
  }

  return { createCard, createNavLink, createProjectPage, createProjectGrid };
}

const element = elementfactory();

export { element };
