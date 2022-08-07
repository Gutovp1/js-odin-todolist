import application from './app'


function task(title, details, priority, date){
    return{
        title,
        details,
        priority: 'low',
        date: date,
    }
}

const containerTask = document.getElementById('task-section');
const btnNewtask = document.getElementById('new-task');
btnNewtask.addEventListener('click', e => {
   alert('new task will be created'); 
});