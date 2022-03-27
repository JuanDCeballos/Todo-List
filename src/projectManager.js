function ProjectManager(title) {
  let projectsArray = [];

  const addProject = (project) => projectsArray.push(project);

  return {
    projectsArray,
    title,
    addProject,
  };
}

export { ProjectManager };
