export default class Task {
  constructor(title, details) {
    this.title = title;
    this.details = details;
    this.dueDate = Date;
    this.priority = "low";
    this.id = Date.now();
  }
}
