import { addProject } from './addProject.js';
import { createProject } from './createProject.js';
import { createElement } from './helperDOMFunction.js';
import { ProjectManager } from './projectManager.js';

const hamburger = document.querySelector('.hamburger');
const addProjectButton = document.querySelector('#add-project');
const projectContainer = document.querySelector('.projects');
const form = document.querySelector('.formContainer');
const formProject = document.querySelector('#formProject');
const inputProjectName = document.querySelector('#inputName');
const leftPanel = document.querySelector('.left-panel');
const projects = document.querySelectorAll('.projectIdentifier');
const focusProject = document.querySelector('.focus-project');

function toggleDisplay(el) {
  if (el.style.display === 'none') {
    el.style.display = 'block';
  } else {
    el.style.display = 'none';
  }
}

hamburger.addEventListener('click', () => {
  toggleDisplay(leftPanel);
});

projects.forEach((project) => {
  project.addEventListener('click', (e) => {
    focusProject.textContent = e.target.textContent;
  });
});

formProject.addEventListener('click', (e) => {
  e.preventDefault();
  const acceptedProjectButton = document.querySelector('#acceptProject');
  const declinedProjectButton = document.querySelector('#declinedProject');
  if (e.target === acceptedProjectButton && inputProjectName.value !== '') {
    createElement(projectContainer, 'div', {
      class: ['projectIdentifier'],
      textContent: inputProjectName.value,
    });
    const projectZzz = ProjectManager('My projects');
    projectZzz.addProject(createProject('All tasksk'));
    console.log(projectZzz);
    toggleDisplay(form);
  } else if (e.target === declinedProjectButton) {
    toggleDisplay(form);
  }
  formProject.reset();
});

addProjectButton.addEventListener('click', () => {
  form.style.display = 'block';
});
