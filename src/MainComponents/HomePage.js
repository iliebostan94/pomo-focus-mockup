import React from 'react';
import { useState } from 'react';

import Login from './AppHeader/Login';
import HomeCounter from './HomeCounter/HomeCounter';
import TaskCounter from './TaskDirectory/TaskCounter';
import TaskComponent from './TaskDirectory/TaskComponent';
import HomePageStyle from './HomePageStyle.css';
import { useSelector, useDispatch } from 'react-redux'
import { addMinutes, addHeader , addTime, usernameInput, addUsernameInput } from './HomeCounter/HomeCounter.reducer';


const HomePage = ( props ) => {

    const [bgColor, setBgColor] = useState("#fd9c99");

    let changeBgColor = (value) => {
        setBgColor(value);
    };
    

    return (
        <div className='home-page-wrapper' style={{ backgroundColor: bgColor }} >

            <Login />
            <HomeCounter changeBgColor={changeBgColor}  />
            <TaskCounter />
            <TaskComponent />

            {/* <input type="text" placeholder={ setUsername } value={ user } onChange={ handleChange }  /> */}

            {/* <button onClick={handleClick}>Submit</button> */}
            {/* <h3 onClick={() => customUsernameGreetings() } > Click here to change header title </h3> */}
            {/* <h3 onClick={() => dispatch(addUsernameInput("Hello Ilie!"))} > Click here to change header title </h3> */}
            {/* <h3 onClick={() => dispatch(addHeader("Hello Ilie!"))} > Click here to change header title </h3> */}

        </div>
    )
}

export default HomePage
