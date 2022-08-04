export default function init(){
    const titleBar = _createClassDiv('titleBar');
    const taskSection = _createClassDiv('taskSection');
    const upcomingSection = _createClassDiv('upcomingSection');
    const projectSection = _createClassDiv('projectSection');
    const containerBtn = document.createElement('div');
    const btnNewProject = document.createElement('button');
    const textBtnNewProject = document.createElement('span');

    titleBar.textContent = 'TO DO LIST - JUST DO IT';

    btnNewProject.textContent = '+';
    textBtnNewProject.textContent = 'New Project';
    
    containerBtn.appendChild(btnNewProject);
    containerBtn.appendChild(textBtnNewProject);
    projectSection.appendChild(containerBtn);
    document.body.appendChild(titleBar);
    document.body.appendChild(taskSection);
    document.body.appendChild(upcomingSection);
    document.body.appendChild(projectSection);
    
    return;
};

function _createClassDiv(name){
    const node = document.createElement('div')
    node.classList.add(name);
    return node;
}