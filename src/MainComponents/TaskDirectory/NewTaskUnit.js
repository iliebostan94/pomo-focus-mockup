import React from 'react'
import { useState, useEffect } from 'react';
import TaskStyle from './TaskStyle.css';

import { useSelector , useDispatch } from 'react-redux';
import { tasks, tasksReducer,   } from '../../app/NewTask.reducer';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';


const NewTaskUnit = () => {

    const {tasks} = useSelector(state => state.tasksReducer);

    const dispatch = useDispatch();

    return (

        <div>
            {tasks.map((task, index ) => (
                <React.Fragment key={task.taskID} >
                    <div className='newTaskUnitWrapper' >
                        
                        <div className="newTaskFirstRow">
                            <div className='newTaskIcon'> <CheckCircleIcon /> </div>
                            <div className="newTaskTitle"> {task.taskTitle} </div>
                            <div className="newTaskSettings"> <MoreVertSharpIcon /> </div>
                        </div>
                        <div className="newTaskSecondRow">
                            <p>{task.taskDescription}</p>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default NewTaskUnit
