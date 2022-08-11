import app from './app'


function taskObj( title, details, date, priority){
    return{
        title,
        id : Date.now(),
        details,
        date: Date,
        priority: 'low',
    }
}


export {taskObj};