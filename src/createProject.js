import { createElement } from './helperDOMFunction.js';

function createProject(container, inputValue) {
  createElement(container, 'div', {
    id: 'myId',
    class: ['uno', 'dos-tres'],
    textContent: inputValue,
  });
}

export { createProject };
