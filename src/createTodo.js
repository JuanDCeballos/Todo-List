import { createElement } from './helperDOMFunction.js';
import uniqid from 'uniqid';

const todoFactory = (title, description, dueDate) => {
  return { title, description, dueDate };
};
