import React from 'react';
import { useSelector } from 'react-redux';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

const SingleTaskUnit = ( props, {taskID, taskTitle, taskDescription, } ) => {

  // const addTasks = useSelector((state) => state.addTasks);
  // console.log(addTasks);

  return (

            <div className='newTaskUnitWrapper' key={props.taskID} >
                <div className="newTaskFirstRow">
                    <div className='newTaskIcon'> <CheckCircleIcon /> </div>
                    <div className="newTaskTitle"> {props.taskTitle} </div>
                    <div className="newTaskSettings"> <MoreVertSharpIcon /> </div>
                </div>
                <div className="newTaskSecondRow">
                    <p>{props.taskDescription}</p>
                </div> 
            </div>


      
      // <React.Fragment>
      //     { addTasks.map((addTask) => (
      //         <div className='newTaskUnitWrapper' key={addTask.taskID} >
      //             <div className="newTaskFirstRow">
      //                 <div className='newTaskIcon'> <CheckCircleIcon /> </div>
      //                 <div className="newTaskTitle"> {addTask.taskTitle} </div>
      //                 <div className="newTaskSettings"> <MoreVertSharpIcon /> </div>
      //             </div>
      //             <div className="newTaskSecondRow">
      //                 <p>{addTask.taskDescription}</p>
      //             </div> 
      //         </div>
      //     ))}
      // </React.Fragment>

  )
}

export default SingleTaskUnit;
