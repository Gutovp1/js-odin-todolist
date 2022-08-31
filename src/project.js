export default class Project {
  constructor(title) {
    this.name = title;
    this.tasks = [];
  }
  getName = () => {
    return this.title;
  };
  setName = (newTitle) => {
    this.title = newTitle;
  };
  addTask = (task) => {
    this.tasks.push(task);
  };
  removeTask = () => {
    this.tasks.pop();
  };
}
