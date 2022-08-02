import React from 'react';
import { useState } from 'react';
import TaskStyle from './TaskStyle.css';

const CreateTaskForm = () => {

    const [displayTextarea, setDisplayTextarea] = useState(false);

    let displayTextareaFunc = () => {
        setDisplayTextarea({displayTextarea: !displayTextarea});
    }

    return (
        <form className='taskForm'>
            <input className='taskTitle' name="taskTitle" type="text" placeholder="Task title" />
            <button style={{display: displayTextarea ? "none" : "block" }}  onClick={() => displayTextareaFunc() } type="button" className='addNoteBtn'>+Add Note</button>
            <textarea style={{display: displayTextarea ? "block" : "none"}} name="taskDesc" id="taskDesc" rows="4" placeholder="Task Description"></textarea>
        </form>
    )
}

export default CreateTaskForm
