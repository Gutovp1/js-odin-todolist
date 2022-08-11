import application from './app'

function projectObj(name = ''){
    const getName = () => {return name;};
    const setName = (newName) => {name = newName};
    let tasks = [];
    const addTask = (task) => {tasks.push(task)};
    const removeTask = () => {};

    
    return {getName, setName, tasks}
}

function projectsList(){
    let projects = [];
    getProjects = function(){ return projects;};
    setProjects = function(newProjects){ projects = newProjects;};
    
}

export {projectObj};

