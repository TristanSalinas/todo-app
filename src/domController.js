import { application as app } from ".";
import { element } from "./domElmtFactories";

function DOMController() {
  //---- fetching base ui ----//
  const projectsNav = document.querySelector("#projects-nav");
  const content = document.querySelector("#content");
  const homeBtn = document.querySelector("#home");
  homeBtn.addEventListener("click", () => {
    app.contentSwitchToGrid();
  });

  const quickAddfield = document.querySelector("#quick-add-field");
  const quickAddBtn = document.querySelector("#quick-add-btn");
  quickAddBtn.addEventListener("click", () => {
    if (quickAddfield.value !== "") {
      app.add(quickAddfield.value);
      quickAddfield.value = "";
    }
  });

  //-----actuals methods ----//

  function init(projectArr) {
    projectArr.forEach((project) => {
      content.append(element.createCard(project));
      projectsNav.append(element.createNavLink(project));
    });
  }

  function clearContent() {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  }
  function clearNav() {
    while (projectsNav.firstChild) {
      projectsNav.removeChild(projectsNav.firstChild);
    }
  }

  function updateDisplay(projectArr) {
    clearNav();
    clearContent();
    init(projectArr);
  }

  function displayGrid(projectArr) {
    clearContent();
    content.append(element.createProjectGrid(projectArr));
  }

  function displayDetails(project) {
    clearContent();
    content.append(element.createProjectPage(project));
  }

  return { init, displayGrid, displayDetails, updateDisplay };
}

export { DOMController };
