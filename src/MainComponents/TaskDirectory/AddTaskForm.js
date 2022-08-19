import React from 'react';
import { useState, useEffect } from 'react';
import TaskStyle from './TaskStyle.css';
import SingleTaskUnit from './SingleTaskUnit';

import { useSelector , useDispatch } from 'react-redux';
import { addTaskTitle, addTaskDescription, } from '../../app/Misc.reducer';
import { addTask } from '../../app/AddTasksSlice';

import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const AddTaskForm = (props) => {

    const [displayCreateTaskForm, setDisplayCreateTaskForm] = useState(false);
    const [displayTextarea, setDisplayTextarea] = useState(false);

    // form constants
    const [value, setValue] = useState();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    // const {taskTitle} = useSelector(state => state.miscReducer);
    // const {taskDescription} = useSelector(state => state.miscReducer);
    // const {tasks} = useSelector(state => state.reducer);

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
        setTaskTitle(event.target.value);
        // dispatch(addTaskTitle(event.target.value));
        // dispatch(tasksReducer(event.target.value));
    }
    const handleTaskDescChange = (event) => {
        setTaskDescription(event.target.value);
        // dispatch(addTaskDescription(event.target.value));
        // dispatch(tasksReducer(event.target.value));
    }
    const checkFormSubmition = (event) => {
        event.preventDefault();
        alert("Please add task title!");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(
            addTask({
            taskTitle: taskTitle,
            taskDescription: taskDescription,
            })
        );

        setTaskTitle("");
        setTaskDescription("")
        // console.log("New form submit button sent this: " + taskTitle );
        // console.log("Here's task description: " + taskDescription );
    }

    return (
        <div className='createTaskWrapper'>
            <button style={{display: displayCreateTaskForm ? "none" : "block" }}  className='addNewTaskBtn' onClick={() => displayCreateTaskFormFunc() } ><ControlPointRoundedIcon />Add Task</button>
            <div className="addTaskFormWrapper" style={{display: displayCreateTaskForm ? "block" : "none" }} >

                <form className='newTaskForm' onSubmit={ taskTitle === "" ? checkFormSubmition : handleSubmit } >
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
                            <span  className='cancelNewTaskBtn' onClick={() => cancelBtnFunc() } >Cancel</span>
                            <input className="formSubmitBtn"  type="submit" placeholder='Save' />                            
                        </div>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default AddTaskForm;
// export default connect(null, { addTodo })(AddTaskForm);

