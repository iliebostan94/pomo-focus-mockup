import React from 'react'
import { useState, useEffect } from 'react';
import TaskStyle from './TaskStyle.css';

import { useSelector , useDispatch } from 'react-redux';
import { combineReducers , taskTitle , taskDescription ,  addTaskTitle , addTaskDescription ,  } from '../../app/HomeCounter.reducer';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';


const NewTaskUnit = () => {

    const {taskTitle} = useSelector(state => state.reducer);
    const {taskDescription} = useSelector(state => state.reducer);
    const dispatch = useDispatch();


    return (
        <div className='newTaskUnitWrapper'>
            <div className="newTaskFirstRow">
                <div className='newTaskIcon'> <CheckCircleIcon /> </div>
                <div className="newTaskTitle"> { taskTitle } </div>
                <div className="newTaskSettings"> <MoreVertSharpIcon /> </div>
            </div>
            <div className="newTaskSecondRow">
                <p>{ taskDescription }</p>
            </div>
            
        </div>
    )
}

export default NewTaskUnit
