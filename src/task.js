import app from "./app";

export default class Task {
  constructor(title, details) {
    this.title = title;
    this.details = details;
    this.date = Date;
    this.priority = "low";
    this.id = Date.now();
  }
  // getName()
}

// function taskObj( title, details, date, priority){
//     return{
//         title,
//         id : Date.now(),
//         details,
//         date: Date,
//         priority: 'low',
//     }
// }

// export {taskObj};
