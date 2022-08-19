import React from 'react';
import { useSelector } from 'react-redux';
import SingleTaskUnit from './SingleTaskUnit';

const AllTasksList = () => {

    const addTasks = useSelector((state) => state.addTasks);
    // console.log(addTasks);

    return (
        <div className='all-tasks-wrapper'>
            { addTasks.map((addTask) => (
                <SingleTaskUnit key={addTask.taskID} taskID={addTask.taskID} taskTitle={addTask.taskTitle} taskDescription={addTask.taskDescription} />
            ))}
        </div>

        // <div className='all-tasks-wrapper'>
        //     <SingleTaskUnit />
        // </div>
    )
}

export default AllTasksList;
