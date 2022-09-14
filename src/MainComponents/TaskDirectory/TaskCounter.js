import React from 'react'
import { useSelector , useDispatch } from 'react-redux';

import TaskStyle from '../TaskDirectory/TaskStyle.css';

const TaskCounter = (props , taskCounterNotice ) => {

    const tasksStore = useSelector((state) => state.tasks);
    const taskID = tasksStore.taskID;

    const pullTaskTitle = tasksStore.map((task) => (task.taskActive && task.taskTitle ? task.taskTitle : null) );

    let stringifyTaskTitle = pullTaskTitle.toString().replace(/,/g, '');
    let validateTaskTitle = stringifyTaskTitle ? stringifyTaskTitle : null;

    return (
        <div className='taskCounterWrapper'>
            <div>#1</div>
            {/* { if task active ? display task title : otherwise display props.taskCounterNotice } */}
            { <div>{ validateTaskTitle ?? props.taskCounterNotice }</div> }
        </div>
    )
}

export default TaskCounter;
