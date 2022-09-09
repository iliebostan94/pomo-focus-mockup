import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setTasksToInactive, toggleActive } from '../../app/AddTasksSlice';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 24;

const SingleTaskUnit = ( props, taskID, taskTitle, taskDescription, taskActive  ) => {

  // menu functionality
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const onClickEvents = () => {
    toggleBorderLeft();
  }

  const toggleBorderLeft = () => {
    let taskID = props.taskID;
    let taskActive = props.taskActive;
        dispatch( 
          toggleActive( { taskID: taskID , taskActive: taskActive } ),
        );
  }

  return (

            <div className='newTaskUnitWrapper' key={props.taskID} style={{ borderLeft: props.taskActive ? "6px solid black" : " " }} >
                {/* <div className="newTaskFirstRow" onClick={() => toggleBorderLeft()} > */}
                <div className="newTaskFirstRow" onClick={() => onClickEvents() } >
                    <div className='newTaskIcon'> <CheckCircleIcon /> </div>
                    <div className="newTaskTitle"> {props.taskTitle} </div>
                    <div className="newTaskSettings"> 
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
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                    </div>
                </div>
                <div className="newTaskSecondRow">
                    <p>{props.taskDescription}</p>
                </div> 
            </div>

  )
}

export default SingleTaskUnit;
