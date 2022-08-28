import React from 'react';
import { useState, useEffect, useRef } from 'react';

import HomeCounterStyle from './HomeCounterStyle.css';
import HomePage from '../HomePage';

const HomeCounter = ( props, bgColor, setBgColor, changeBgColor, changeTaskCounterNotice  ) => {

    const [ minutes, setMinutes ] = useState(20);
    const [ seconds, setSeconds ] =  useState(0);
    const [ start, setStart ] =  useState(false);
    const [ paused, setPaused ] = useState(false);

    useEffect(()=>{
      let myInterval = setInterval(() => {
              if (start) {
                  setSeconds(seconds - 1);
              }
              if ( seconds === 0 || paused ) {
                  if ( minutes === 0 || paused ) {
                      clearInterval(myInterval)
                      setStart(false)
                  } else {
                      setMinutes(minutes - 1);
                      setSeconds(59);
                  }
              } 
          }, 1000)
          return ()=> {
              clearInterval(myInterval);
            };
      });

      const setTimer = (minValue, secValue) => {
        setMinutes(minValue);
        setSeconds(secValue);
      }

    return (
        <div className='home-counter-wrapper' >
                <div className='switch-buttons-wrapper'>
                    <button onClick={() => { props.changeBgColor("#fd9c99") ; setTimer(20, 0); props.changeTaskCounterNotice("Time to focus!") ; } } >Pomodoro</button>
                    <button onClick={() => { props.changeBgColor("#4c9195") ; setTimer(7, 0) ; props.changeTaskCounterNotice("Time for a short Break") ; } } >Short break</button>
                    <button onClick={() => { props.changeBgColor("#457ca3") ; setTimer(14, 0); props.changeTaskCounterNotice("Time for a longer Break") ; } } >Long break</button>
                </div>

                <div className="counter-start-wrapper">
                    <div className="home-counter-clock">
                      { minutes === 0 && seconds === 1
                        ? null
                        : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
                      }
                      {/* <input type="number" placeholder='Minutes' onChange={(e) => setMinutes(e.target.value)} />
                      <input type="number" placeholder='Seconds' onChange={(e) => setSeconds(e.target.value)} /> */}
                      <button type='button' onClick={() => { setStart(true) ; setPaused(false) }}>Start</button>
                      <button type='button' onClick={() => setPaused(true)}>Pause</button>
                    </div>
                </div>
        </div>
    )
}

export default HomeCounter;
