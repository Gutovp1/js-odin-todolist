import {taskObj} from './task'
import { updateTasksList } from './interface';

const containerTask = document.querySelector('.task-section');
const formTask = document.querySelector('.form-task') ;
const btnNewTask = document.querySelector('.new-task');
const btnAddTask = document.querySelector('.btn-add-task');
const btnCancelTask = document.querySelector('.btn-cancel-task');
let titleInput = document.querySelector('#titleTask');
let detailsInput = document.querySelector('#detailsTask');

let tasks = [];

btnAddTask.addEventListener('click', e => {
    e.preventDefault();
    let task1 = taskObj(titleInput.value , detailsInput.value);
    tasks.push(task1);
    
    updateTasksList(tasks);
    formTask.reset();
});

btnCancelTask.addEventListener('click', e => {
    e.preventDefault();
    formTask.reset();
    formTask.classList.toggle('hidden');
});

btnNewTask.addEventListener('click', () => formTask.classList.toggle('hidden'));
