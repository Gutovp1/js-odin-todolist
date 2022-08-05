export default function application(arr){
    console.log('app is here');
    let aMust = toDos('Odin','finish this project','','high');
    aMust.setProject('todo');
    console.log(aMust.getProject());
    console.log(aMust.getDueDate());
    console.log(aMust.getPriority());
}


// export default function toDos(title, description, date,priority){
function toDos(title, description, date,priority){
    let project;
    const getTitle = () => title || 'No title';
    const getDescription = () => description || 'No description';
    const getPriority = () => priority || 'No priority';
    const getDueDate = () =>  date || new Date();
    const getProject = () => project || 'No project';
    
    const setProject = (nameProj) => project = nameProj;

    return{
        getTitle,
        getDescription,
        getDueDate,
        getPriority,
        setProject,
        getProject
    }
}