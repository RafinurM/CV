const projectTemplate = document.querySelector("#project_template").content;

export function createProject(projectData) {
  const project = projectTemplate.cloneNode(true);
  const projectLink = project.querySelector("a");
  const projectImg = project.querySelector("img");
  const projectDescription = project.querySelector(".project_description");

  projectLink.setAttribute("href", projectData.link);
  projectImg.setAttribute("src", projectData.image);
  projectImg.setAttribute("alt", projectData.name);
  projectDescription.textContent = projectData.description;
  return project;
}
