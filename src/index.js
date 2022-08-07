// import './style.css';
import init from './interface';
import application from './app';
import {newProject} from './interface';

const newTask = document.querySelector('.new-task');
newTask.addEventListener('click', () => alert('Hi'));
// console.log('I am index.js');
// init();
application();
// newProject();