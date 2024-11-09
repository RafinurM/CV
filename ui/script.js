const projectList = Array.from(document.querySelectorAll('.project_element-link'));
const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
let id = 0;

init();

function init() {
    addActiveClass(id);
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
buttonNext.addEventListener('click', () => {
    switchLinkNext(projectList);
});

buttonPrev.addEventListener('click', () => {
    switchLinkPrev(projectList);
});

