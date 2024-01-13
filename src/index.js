import { domController } from "./domController";
import { dataController } from "./dataController";

function appController() {
  let curView = "projectGrid";
  const data = dataController();
  const page = domController();

  function contentSwitchTo(project) {
    if (curView !== project.name) {
      page.displayDetails(project);
      curView = project.name;
    }
  }
  function contentSwitchToGrid() {
    page.displayGrid(data.getProjects());
    curView = "projectGrid";
  }

  function add(projectName) {
    const project = data.addProject(projectName); // addProject() => add project to storage and return the newly created project.
    page.updateDisplay(data.getProjects());
    contentSwitchTo(project);
  }

  add("Project_1");
  add("Project_2");
  add("Project_3");
  add("Project_4");

  return { data, page, contentSwitchTo, contentSwitchToGrid, add };
}

const application = appController();

export { application };
