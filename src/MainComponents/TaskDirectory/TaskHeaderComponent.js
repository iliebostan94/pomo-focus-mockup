import React from 'react';
import AddTaskForm from './AddTaskForm';
import TaskStyle from './TaskStyle.css';
import AllTasksList from './AllTasksList';

import { useSelector, useDispatch } from 'react-redux';
import {  deleteEmAll } from '../../app/AddTasksSlice';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TaskComponent = () => {
    const tasksStore = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    // console.log(tasksStore);

    const options = [
        'Atria',
        'Callisto',
        'Dione',
        <p className='m-0' onClick={() => deleteEmAllFunc()}>Delete all tasks</p>

      ];
    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const deleteEmAllFunc = () => {
    alert("Are you sure you want to remove all tasks?");
        dispatch( 
            deleteEmAll(),
          );
    }

    return (
        <div className='taskWrapper'>
            <div className='tasksUpperBar'>
                <p className='tasksUpperBar-title'>Tasks</p>
                <div>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                    <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                        'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Atria'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                        ))}
                    </Menu>
                </div>
                
            </div>

                <AllTasksList />            
                <AddTaskForm />
        </div>
    )
}

export default TaskComponent
