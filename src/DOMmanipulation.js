import application from './app.js'

export default function init(){
    const titleBar = _createClassDiv('titleBar');
    const taskSection = _createClassDiv('taskSection');
    const upcomingSection = _createClassDiv('upcomingSection');
    const projectSection = _createClassDiv('projectSection');
    const containerBtn = document.createElement('div');
    const btnNewProject = document.createElement('button');
    const textBtnNewProject = document.createElement('span');

    const btnTask = document.createElement('input');
    btnTask.setAttribute('type','button');
    btnTask.onclick = _newForm;
    btnTask.value = '+';
    
    titleBar.textContent = 'TO DO LIST - JUST DO IT';

    btnNewProject.textContent = '+';
    textBtnNewProject.textContent = 'New Project';
    
    btnNewProject.addEventListener('click', () => console.log('Hi'));
    
    containerBtn.appendChild(btnNewProject);
    containerBtn.appendChild(textBtnNewProject);
    projectSection.appendChild(containerBtn);
    document.body.appendChild(titleBar);
    document.body.appendChild(taskSection);
    taskSection.appendChild(btnTask);
    document.body.appendChild(upcomingSection);
    document.body.appendChild(projectSection);
    
    function _newForm(){
        const nForm = document.createElement('form');
        const task = document.createElement('input');
        task.setAttribute('type','text');
        nForm.appendChild(task);
        taskSection.append(nForm);
    }

    return;
};

function _createClassDiv(name){
    const node = document.createElement('div')
    node.classList.add(name);
    return node;
}

