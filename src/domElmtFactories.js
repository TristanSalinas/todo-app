import { application as app } from ".";

function elementfactory() {
  function createProjectPage(project) {
    const projectPage = document.createElement("div");
    const title = document.createElement("h1");
    projectPage.append(title);
    const description = document.createElement("p");
    description.textContent = "Project description : " + project.description;
    projectPage.append(description);
    title.textContent = project.name;
    return title;
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
