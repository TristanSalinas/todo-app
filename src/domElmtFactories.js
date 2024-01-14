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
    descriptionDiv.append(textarea);
    projectPage.append(descriptionDiv);

    /*----------------------------TASKS-------------------------------*/
    const tasksWrapper = document.createElement("div");
    tasksWrapper.classList.add("tasks-wrapper");

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

    /*---------------DONE -----------------*/

    const doneTasksWrapper = document.createElement("div");
    doneTasksWrapper.classList.add("done-tasks-wrapper");

    const doneh2 = document.createElement("h2");
    doneh2.textContent = "DONE :";

    const archivebtn = document.createElement("button");
    archivebtn.textContent = "Archive checked tasks !";

    const doneTasksList = document.createElement("div");
    doneTasksList.classList.add("done-tasks-list");

    doneTasksWrapper.append(archivebtn, doneh2, doneTasksList);

    tasksWrapper.append(todoTasksWrapper, doneTasksWrapper);

    projectPage.append(tasksWrapper);

    /*----------------TASKS LOGIC DECLARATION -------------*/

    // TODO Tasks

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

    // DONE

    function createDoneTaskLine(task, taskId) {
      const doneTaskLine = document.createElement("div");
      doneTaskLine.classList.add("done-task-line");
      const p = document.createElement("p");
      p.textContent = task;
      const unarchivebtn = document.createElement("button");
      unarchivebtn.textContent = "unarchive";
      unarchivebtn.addEventListener("click", () => {
        project.todoTasks.push(project.doneTasks.splice(taskId, 1)[0]);
        updateDoneTaskList();
        updateTaskList();
      });
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.addEventListener("click", () => {
        project.doneTasks.splice(taskId, 1);
        updateDoneTaskList();
      });

      doneTaskLine.append(p, unarchivebtn, removeBtn);
      return doneTaskLine;
    }
    function clearDoneTasksList() {
      while (doneTasksList.firstChild) {
        doneTasksList.removeChild(doneTasksList.firstChild);
      }
    }
    function initDoneTaskList() {
      project.doneTasks.forEach((task, taskIndex) => {
        doneTasksList.append(createDoneTaskLine(task, taskIndex));
      });
    }
    function updateDoneTaskList() {
      clearDoneTasksList();
      initDoneTaskList();
    }
    /*-----------------TASK LOGIC USAGE ------------*/

    initTasksList();
    initDoneTaskList();
    archivebtn.addEventListener("click", function recursiveSrch() {
      const todoarr = Array.from(todoTasksList.querySelectorAll(".task"));
      const idarr = [];
      todoarr.forEach((task) => {
        if (task.firstChild.checked) {
          const id = parseInt(task.firstChild.id);
          idarr.unshift(id);
          project.doneTasks.push(project.todoTasks[id]);
        }
      });
      idarr.forEach((id) => {
        project.todoTasks.splice(id, 1);
      });

      updateTaskList();
      updateDoneTaskList();
    });
    addTodoField.addEventListener("keydown", (event) => {
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
