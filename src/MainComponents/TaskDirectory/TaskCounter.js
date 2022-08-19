import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import HomePage from '../HomePage';
import HomeCounter from '../HomeCounter/HomeCounter';
import TaskStyle from '../TaskDirectory/TaskStyle.css';
import setTaskActive from '../../app/Misc.reducer';


const TaskCounter = (props , taskCounterNotice ) => {

    const dispatch = useDispatch();
    
    const taskCounterTitleCheck = () => {
        dispatch({
            // setTaskActive({ false });
        })
    }


    return (
        <div className='taskCounterWrapper'>
            <div>#1</div>
            <div>{ props.taskCounterNotice }</div>
            {/* if task active ? display task title : otherwise display props.taskCounterNotice */}
        </div>
    )
}

export default TaskCounter;
