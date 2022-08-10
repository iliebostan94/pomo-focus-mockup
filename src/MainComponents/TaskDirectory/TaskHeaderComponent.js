import React from 'react';
import AddTaskForm from './AddTaskForm';
import TaskStyle from './TaskStyle.css';
import NewTaskUnit from './NewTaskUnit';

import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
  ];
const ITEM_HEIGHT = 48;

const TaskComponent = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const addTask = (task) => {
        console.log()
    }

    return (
        <div className='taskWrapper'>
            <div className='tasksUpperBar'>
                <p className='tasksUpperBar-title'>Tasks</p>
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

                <NewTaskUnit />            
                <AddTaskForm />
        </div>
    )
}

export default TaskComponent
