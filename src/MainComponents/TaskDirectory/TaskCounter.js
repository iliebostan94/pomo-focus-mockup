import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';

import HomePage from '../HomePage';
import HomeCounter from '../HomeCounter/HomeCounter';
import TaskStyle from '../TaskDirectory/TaskStyle.css';
import setTaskActive from '../../app/Misc.reducer';


const TaskCounter = (props , taskCounterNotice ) => {

    const tasksStore = useSelector((state) => state.tasks);

    const pullTaskTitle = tasksStore.map((task) => (task.taskActive && task.taskTitle ? task.taskTitle : null) );

    let stringifyTaskTitle = pullTaskTitle.toString().replace(/,/g, '');
    let validateTaskTitle = stringifyTaskTitle ? stringifyTaskTitle : null;

    return (
        <div className='taskCounterWrapper'>
            <div>#1</div>
            {/* { if task active ? display task title : otherwise display props.taskCounterNotice } */}
            { <div>{ validateTaskTitle ?? props.taskCounterNotice }</div> }
        </div>
    )
}

export default TaskCounter;
