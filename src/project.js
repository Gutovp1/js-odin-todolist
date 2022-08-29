import application from "./app";

export default class Project {
  constructor(title) {
    this.name = title;
    this.tasks = [];
  }
  getName = () => {
    return title;
  };
  setName = (newTitle) => {
    title = newTitle;
  };
  addTask = (task) => {
    this.tasks.push(task);
  };
  removeTask = () => {
    this.tasks.pop();
  };

  // return {getName, setName, tasks, addTask, removeTask}
}

function projectsList() {
  let projects = [];
  getProjects = function () {
    return projects;
  };
  setProjects = function (newProjects) {
    projects = newProjects;
  };
}

// export {ProjectObj};
