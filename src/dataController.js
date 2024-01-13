function projectFact(projectName) {
  const name = projectName;
  let dueDate = "undefined";
  let description = "A super cool project where...";
  let todoTasks = ["mon premier est une tache", "mon second une grosse blate"];
  let doneTasks = [];
  function setDuedate(date) {
    dueDate = date;
  }
  return { name, dueDate, description, todoTasks, doneTasks };
}

function dataController() {
  const projectsArr = [];

  function getProjects() {
    return projectsArr;
  }
  function getProject(projectName) {}

  function addProject(projectName) {
    const newProject = projectFact(projectName);
    projectsArr.push(newProject);
    return newProject;
  }

  return { getProjects, addProject };
}

export { dataController };
