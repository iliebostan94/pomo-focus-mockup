import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './MainComponents/HomePage';
import { useSelector } from 'react-redux'

function App( props ) {

  const { usernameInput } = useSelector(state => state.miscReducer);

  const [ pullHeaderText, setPullHeaderText ] =  useState("");

  const pullHeader = (data) => {
    // console.log(data);
    setPullHeaderText(data);
  };

  useEffect( () => {
    // document.title = usernameInput;
    document.title = usernameInput ? usernameInput : pullHeaderText;
  });


  return (
    <div className="App">
            <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
      <HomePage universalHeaderTitle={ pullHeader }  />
    </div>
  );
}

export default App;
