import React from 'react';

import HomePageStyle from '../HomePageStyle.css';
import { useSelector, useDispatch } from 'react-redux';
import { usernameInput, addUsernameInput, } from '../../app/Misc.reducer';

const Login = () => {

    const {usernameInput} = useSelector(state => state.miscReducer);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(addUsernameInput(event.target.value));
    };

    const handleClick = (event) => {
        event.preventDefault();
        // alert('A name was submitted: ' + usernameInput );
        dispatch(addUsernameInput("Welcome " + usernameInput ));
        document.querySelector("div.mainLoginWrapper").style.display = "none";
        // setUsername("New value");
    };

    return (
        <div className='mainLoginWrapper'>
            <form onSubmit= { handleClick }>
                <label htmlFor="">Please enter your name:   
                <input type="text" placeholder={ usernameInput } value={ usernameInput } onChange={ handleChange }  />
                </label>
                <input type="submit" value="Submit" onSubmit= { handleClick } />
            </form>
            <p>Username: { usernameInput }</p>
        </div> 
    )
}

export default Login
