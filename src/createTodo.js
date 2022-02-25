import arrayOfTodos from './index.js';
import { createElement } from './helperDOMFunction.js';
import uniqid from 'uniqid';

const todoFactory = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

function addTodo() {
  const todo = todoFactory();
  arrayOfTodos.push(todo);
}
