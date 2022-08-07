import application from './app';
import {project} from './project';

const taskContainer = document.querySelector('.task-section');
const projectContainer = document.querySelector('.project-section');
const btnNewProject = document.querySelector('.new-project');

btnNewProject.addEventListener('click', e => {
    createFormProject();
    // btnNewProject.toggleAttribute;
});

let prim = project;

function createFormProject(){
    const divProject = document.createElement('form');
    divProject.innerHTML =`
    <input type="text" id="project-input" placeholder="Project Name" name="name">
    <br>
    <button class="btn-project" id="cancel-project">Cancel</button>
    <button class="btn-project" id="add-project">Add</button>
    `;
    projectContainer.appendChild(divProject);

    let btnAdd = document.getElementById('add-project');
    btnAdd.addEventListener('click', e => {
        let projectName = document.getElementById('project-input');
        e.preventDefault();
        let prima = project(projectName.value);
        prim = prima;
        taskContainer.appendChild(projectName);
        console.log(prima)
        divProject.remove();

    });

    let btnCancel = document.getElementById('cancel-project');
    btnCancel.addEventListener('click', e =>{
        e.preventDefault();
        divProject.remove();
    });

        
    }




const createNewProject = function(){
        createFormProject();
}

    export {createNewProject};