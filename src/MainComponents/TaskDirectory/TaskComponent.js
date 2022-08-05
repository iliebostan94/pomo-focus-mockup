import React from 'react';
import CreateTaskForm from './CreateTaskForm';
import TaskStyle from './TaskStyle.css';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TaskComponent = () => {
    return (
        <div className='taskWrapper'>
            <div>
                <p>Tasks</p>

            </div>
            <CreateTaskForm />
        </div>
    )
}

export default TaskComponent
