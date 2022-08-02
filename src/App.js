import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './MainComponents/HomePage';
import { useSelector } from 'react-redux'

function App() {

  const {header} = useSelector(state => state.reducer);
  const {usernameInput} = useSelector(state => state.reducer);


  useEffect( () => {
    // document.title = header;
    document.title = usernameInput;
  });


  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
