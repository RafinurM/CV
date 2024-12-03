import "./style/index.css";
import { instrumentary } from "./scripts/instrumentsData";
import { createInstrument } from "./scripts/instruments";
import { projects } from "./scripts/projectsData";
import { createProject } from "./scripts/projects";

const instrumentList = document.querySelector(".instrumentary_list");
const projectsContainer = document.querySelector(".projects_container");
const buttonNext = document.querySelector(".next");
const buttonPrev = document.querySelector(".prev");
const loader = document.querySelector('.loaderArea');
const aboutSection = document.querySelector('.about');
const carrierSection = document.querySelector('.carrier');
const skillsSection = document.querySelector('.instrumentary');
const experienceSection = document.querySelector('.experience');
let projectList = undefined;
let id = 0;

window.addEventListener('load', () => {
  loader.classList.add('visually-hidden'); // remove loader
  init();
})

function init() {
  loadHeader();
  setTimeout(() => loadSection(aboutSection), 2200);
  setTimeout(() => loadSection(carrierSection), 2700);
  setTimeout(() => loadSection(skillsSection), 3200);
  setTimeout(() => loadSection(experienceSection), 4500);
  instrumentary.forEach((instrument) => {
    instrumentList.append(createInstrument(instrument));
  });
  projects.forEach((project) => {
    projectsContainer.append(createProject(project));
  });
  projectList = Array.from(document.querySelectorAll(".project_element-link"));
  setInterval(switchLinkNext, 10000);
  addActiveClass(id);
}

function loadHeader() {
  const header = document.querySelector('.header');
  header.classList.remove('hidden');
}

function loadSection(section) {
  section.classList.remove('hidden')
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
