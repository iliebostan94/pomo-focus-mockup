import React from 'react';
import { useState, useEffect } from 'react';

import Login from './AppHeader/Login';
import HomeCounter from './HomeCounter/HomeCounter';
import TaskCounter from './TaskDirectory/TaskCounter';
import TaskHeaderComponent from './TaskDirectory/TaskHeaderComponent';
import HomePageStyle from './HomePageStyle.css';
import { useSelector, useDispatch } from 'react-redux'
import { addMinutes, addHeader , addTime, usernameInput, addUsernameInput } from '../app/HomeCounter.reducer';


const HomePage = ( props ) => {

    const [bgColor, setBgColor] = useState("#fd9c99");
    const [taskCounterNotice, setTaskCounterNotice] = useState("Time to focus!");

    let changeBgColor = (value) => {
        setBgColor(value);
    };
    
    let changeTaskCounterNotice = (value) => {
        setTaskCounterNotice(value);
    }
    props.universalHeaderTitle(taskCounterNotice);

    return (
        <div className='home-page-wrapper' style={{ backgroundColor: bgColor }} >

            <Login />
            <HomeCounter changeBgColor={changeBgColor} changeTaskCounterNotice={changeTaskCounterNotice} />
            <TaskCounter taskCounterNotice={ taskCounterNotice } changeTaskCounterNotice={changeTaskCounterNotice} />
            <TaskHeaderComponent />
        </div>
    )
}

export default HomePage
