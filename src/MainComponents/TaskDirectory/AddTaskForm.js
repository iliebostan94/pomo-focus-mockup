import React from 'react';
import { useState, useEffect } from 'react';
import TaskStyle from './TaskStyle.css';

import { useSelector , useDispatch } from 'react-redux';
import { combineReducers, taskTitle, taskDescription,  addTaskTitle, addTaskDescription } from '../../app/HomeCounter.reducer';

import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const AddTaskForm = () => {

    const [displayCreateTaskForm, setDisplayCreateTaskForm] = useState(false);
    const [displayTextarea, setDisplayTextarea] = useState(false);

    // form constants
    // const [taskTitle, setTaskTitle] = useState("");
    // const [taskDescription, setTaskDescription] = useState("");
    const {taskTitle} = useSelector(state => state.reducer);
    const {taskDescription} = useSelector(state => state.reducer);

    const dispatch = useDispatch();


    let displayTextareaFunc = () => {
        setDisplayTextarea({displayTextarea: !displayTextarea});
    }
    let displayCreateTaskFormFunc = () => {
        setDisplayCreateTaskForm({displayCreateTaskForm: !displayCreateTaskForm});
    }
    let cancelBtnFunc = () => {
        setDisplayCreateTaskForm(false);
    }

    // form controlers
    const handleTaskTitleChange = (event) => {
        // setTaskTitle(event.target.value);
        dispatch(addTaskTitle(event.target.value));
    }
    const handleTaskDescChange = (event) => {
        // setTaskDescription(event.target.value);
        dispatch(addTaskDescription(event.target.value));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("New form submit button sent this: " + taskTitle );
        console.log("Here's task description: " + taskDescription );

        if(!taskTitle) {
            alert("Please add task title!");
        };

        // onAdd({taskTitle , taskDescription });

        dispatch(addTaskTitle(""));
        dispatch(addTaskDescription(""));
        setDisplayCreateTaskForm(false);
    }

    return (
        <div className='createTaskWrapper'>
            <button style={{display: displayCreateTaskForm ? "none" : "block" }}  className='addNewTaskBtn' onClick={() => displayCreateTaskFormFunc() } ><ControlPointRoundedIcon />Add Task</button>
            <div className="addTaskFormWrapper" style={{display: displayCreateTaskForm ? "block" : "none" }} >

                <form className='newTaskForm' onSubmit={handleSubmit} >
                    <div className="newTaskContent">
                        <input className='taskTitle' name="taskTitle" type="text" value={taskTitle} placeholder="Task title" onChange={handleTaskTitleChange}/>
                        <div className="addNoteBtnWrapper">
                            <button style={{display: displayTextarea ? "none" : "block" }}  onClick={() => displayTextareaFunc() } type="button" className='addNoteBtn'>+ Add Note</button>
                            <textarea style={{display: displayTextarea ? "block" : "none"}} className='addNoteTextarea' name="taskDesc"
                                id="taskDesc" rows="4" value={taskDescription} onChange={handleTaskDescChange}  placeholder="Task Description">
                            </textarea>
                        </div>
                    </div>
                    <div className="newTaskFormFooter">
                        <div className="removeTaskDiv">
                            <button>Delete</button>
                        </div>
                        <div className="submitNewTaskDiv">
                            <button  className='cancelNewTaskBtn' onClick={() => cancelBtnFunc() } >Cancel</button>
                            <input type="submit" placeholder='Save' />                            
                        </div>
                    </div>
                </form>

            </div>
            
        </div>

    )
}

export default AddTaskForm;
