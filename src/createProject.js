import uniqid from 'uniqid';

function createProject(name) {
  let todos = [];

  const addTodo = (todo) => todos.push(todo);

  return {
    addTodo,
    todos,
  };
  // arrayOfProjects.push({
  //   projectTitle: name,
  //   id: uniqid(),
  //   tasks: [],
  // });
}

export { createProject };
