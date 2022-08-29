import { updateTasksList } from "./interface";
import Task from "./task";
import Project from "./project";

const containerTask = document.querySelector(".task-section");
const formTask = document.querySelector(".form-task");
const btnNewTask = document.querySelector(".new-task");
const btnAddTask = document.querySelector(".btn-add-task");
const btnCancelTask = document.querySelector(".btn-cancel-task");
let titleInput = document.querySelector("#titleTask");
let detailsInput = document.querySelector("#detailsTask");

let project1 = new Project("teste");

btnAddTask.addEventListener("click", (e) => {
  e.preventDefault();
  let task1 = new Task(titleInput.value, detailsInput.value);
  project1.addTask(task1);
  updateTasksList(project1.tasks);
  formTask.reset();
});

btnCancelTask.addEventListener("click", (e) => {
  e.preventDefault();
  formTask.reset();
  formTask.classList.toggle("hidden");
});

btnNewTask.addEventListener("click", () => formTask.classList.toggle("hidden"));
