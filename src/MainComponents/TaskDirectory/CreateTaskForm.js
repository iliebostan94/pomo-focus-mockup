import React from 'react';
import { useState, useEffect } from 'react';
import TaskStyle from './TaskStyle.css';

import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const CreateTaskForm = () => {

    const [displayCreateTaskForm, setDisplayCreateTaskForm] = useState(false);
    const [displayTextarea, setDisplayTextarea] = useState(false);

    let displayTextareaFunc = () => {
        setDisplayTextarea({displayTextarea: !displayTextarea});
    }
    let displayCreateTaskFormFunc = () => {
        setDisplayCreateTaskForm({displayCreateTaskForm: !displayCreateTaskForm});
    }

    return (
        <div className='createTaskWrapper'>
            <button style={{display: displayCreateTaskForm ? "none" : "block" }}  className='addNewTaskBtn' onClick={() => displayCreateTaskFormFunc() } ><ControlPointRoundedIcon />Add Task</button>
            <div className="newTaskFormWrapper" style={{display: displayCreateTaskForm ? "block" : "none" }} >

                <form className='newTaskForm' >
                    <input className='taskTitle' name="taskTitle" type="text" placeholder="Task title" />

                    <div className="addNoteBtnWrapper">
                        <button style={{display: displayTextarea ? "none" : "block" }}  onClick={() => displayTextareaFunc() } type="button" className='addNoteBtn'>+ Add Note</button>
                        <textarea style={{display: displayTextarea ? "block" : "none"}} className='addNoteTextarea' name="taskDesc" id="taskDesc" rows="4" placeholder="Task Description"></textarea>
                    </div>              
                </form>
                <div className="newTaskFormFooter">
                    <div className="removeTaskDiv">
                        <button>Delete</button>
                    </div>
                    <div className="submitNewTaskDiv">
                        <button>Cancel</button>
                        <input type="submit" placeholder='Save' />
                    </div>
                </div>

            </div>
            
        </div>

    )
}

export default CreateTaskForm
