function projectFact(projectName) {
  const name = projectName;
  let dueDate = "undefined";
  let description = "A super cool project where...";
  let todoTasks = [];
  let doneTasks = [];
  function setDuedate(date) {
    dueDate = date;
  }
  return { name, dueDate, description, setDuedate };
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
