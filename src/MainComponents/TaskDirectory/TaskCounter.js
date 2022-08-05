import React from 'react'
import { useState, useEffect } from 'react';

import HomePage from '../HomePage';
import HomeCounter from '../HomeCounter/HomeCounter';
import TaskStyle from '../TaskDirectory/TaskStyle.css';


const TaskCounter = (props , taskCounterNotice ) => {

    
    return (
        <div className='taskCounterWrapper'>
            <div>#1</div>
            <div>{ props.taskCounterNotice }</div>
        </div>
    )
}

export default TaskCounter;
