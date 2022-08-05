import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './MainComponents/HomePage';
import { useSelector } from 'react-redux'

function App() {

  const {usernameInput} = useSelector(state => state.reducer);


  useEffect( () => {
    document.title = usernameInput;
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
      <HomePage />
    </div>
  );
}

export default App;
