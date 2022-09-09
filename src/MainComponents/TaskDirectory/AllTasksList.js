import React from 'react';
import { useSelector } from 'react-redux';

import SingleTaskUnit from './SingleTaskUnit';

const AllTasksList = () => {

    const tasksStore = useSelector((state) => state.tasks);

    return (
        <div className='all-tasks-wrapper'>
            { tasksStore.map((task) => (
                <SingleTaskUnit key={task.taskID} taskID={task.taskID} taskTitle={task.taskTitle} 
                taskDescription={task.taskDescription} taskActive={task.taskActive}  />
            ))}
        </div>

    )
}

export default AllTasksList;
