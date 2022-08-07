import application from './app'

function project(name = ''){
    const getName = () => {return name;}
    const setName = (newName) => {name = newName};
    let tasks = ['do the math','do the dishes'];
    return {getName, tasks}
}

export {project};