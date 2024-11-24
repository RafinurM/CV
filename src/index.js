import "./style/index.css";
import { instrumentary } from "./scripts/instrumentsData";
import { createInstrument } from "./scripts/instruments";


const projectList = Array.from(document.querySelectorAll('.project_element-link'));
const instrumentList = document.querySelector('.card_list');

const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
const page = document.querySelector('.page')
const colors = ['#000000', '#d4aeae', '#b4b08d', '#67acbd', '#baeffc', '#e5c1f0', '#b1666d', '#757575', '#7f9b91', '#7fcfb3', '#818d6b']
let id = 0;

init();

function init() {
    addActiveClass(id);
    // setInterval(createRandomCircle, 500);
    setInterval(switchLinkNext, 10000);
    instrumentary.forEach(instrument => {
        console.log(instrument)
        instrumentList.append(createInstrument(instrument))
    })
}

function addActiveClass(id) {
    projectList[id].classList.add('project_element-link-active');
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
    projectList.forEach(project => {
        project.classList.remove('project_element-link-active');
    })
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = 5;
    const { width, height } = page.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    // const y = getRandomNumber(0, height - size);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${0}px`;
    circle.style.left = `${x}px`;
    page.append(circle);
    console.log(height)
    function setColor() {
        const color = getRandomColor();
        circle.style.backgroundColor = `${color}`;
    };
    function moveCircle() {
        circle.style.transform = `translateY(${height}px)`;
    }
    setColor();
    setTimeout(moveCircle, 1000);
}

buttonNext.addEventListener('click', () => {
    switchLinkNext(projectList);
});

buttonPrev.addEventListener('click', () => {
    switchLinkPrev(projectList);
});

