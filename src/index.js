import "./style/index.css";
import { instrumentary } from "./scripts/instrumentsData";
import { createInstrument } from "./scripts/instruments";
import { projects } from "./scripts/projectsData";
import { createProject } from "./scripts/projects";

const instrumentList = document.querySelector(".card_list");
const projectsContainer = document.querySelector(".projects_container");
let projectList = undefined;
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
let id = 0;

init();

function init() {
  setInterval(switchLinkNext, 10000);
  instrumentary.forEach((instrument) => {
    instrumentList.append(createInstrument(instrument));
  });
  projects.forEach((project) => {
    projectsContainer.append(createProject(project));
  });
  projectList = Array.from(document.querySelectorAll(".project_element-link"));
  addActiveClass(id);
}

function addActiveClass(id) {
  projectList[id].classList.add("project_element-link-active");
}

function switchLinkNext() {
  clearActiveClass(projectList);
  if (id >= projectList.length - 1) {
    id = -1;
  }
  id = id + 1;
  addActiveClass(id);
}

function switchLinkPrev() {
  clearActiveClass(projectList);
  if (id <= 0) {
    id = projectList.length;
  }
  id = id - 1;
  addActiveClass(id);
}

function clearActiveClass(projectList) {
  projectList.forEach((project) => {
    project.classList.remove("project_element-link-active");
  });
}

function animateArrow(button) {
  const thirdTriangle = button.querySelector('.thirdTriangle');
  thirdTriangle.setAttribute('stroke', 'var(--sColor)');
  setTimeout(() => thirdTriangle.setAttribute('stroke', 'var(--transparent)'), 300)
}

buttonNext.addEventListener("click", () => {
  switchLinkNext(projectList);
  animateArrow(buttonNext);
});

buttonPrev.addEventListener("click", () => {
  switchLinkPrev(projectList);
  animateArrow(buttonPrev);
  console.log()
});
