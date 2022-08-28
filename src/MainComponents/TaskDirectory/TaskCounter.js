import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import HomePage from '../HomePage';
import HomeCounter from '../HomeCounter/HomeCounter';
import TaskStyle from '../TaskDirectory/TaskStyle.css';
import setTaskActive from '../../app/Misc.reducer';


const TaskCounter = (props , taskCounterNotice ) => {

    const tasksStore = useSelector((state) => state.tasks);

    // const validateTaskTitle = tasksStore.map((task) => (task.taskActive && task.taskTitle ? task.taskTitle : null) );
    const pullTaskTitle = tasksStore.map((task) => (task.taskActive && task.taskTitle ? task.taskTitle : null) );

    let stringifyTaskTitle = pullTaskTitle.toString().replace(/,/g, '');
    let validateTaskTitle = stringifyTaskTitle ? stringifyTaskTitle : null;
    // const validateTaskTitle = tasksStore[1].taskActive && tasksStore[1].taskTitle ? tasksStore[1].taskTitle : null;
    // console.log(validateTaskTitle);
    

    

    return (
        <div className='taskCounterWrapper'>
            <div>#1</div>
            { <div>{ validateTaskTitle ?? props.taskCounterNotice }</div> }
            {/* <p>{ validateTaskTitle }</p> */}
            {/* { if task active ? display task title : otherwise display props.taskCounterNotice } */}
        </div>
    )
}

export default TaskCounter;
