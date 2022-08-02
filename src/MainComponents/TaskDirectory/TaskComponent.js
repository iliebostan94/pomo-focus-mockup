import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskStyle from './TaskStyle.css';

const TaskComponent = () => {
    return (
        <div className='taskWrapper'>
            <div> Create a new task here component!</div>
            <CreateTaskForm />
        </div>
    )
}

export default TaskComponent
