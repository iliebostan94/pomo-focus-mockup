import { combineReducers, createSlice } from "@reduxjs/toolkit";
// import { addTasksReducer } from './AddTasksSlice';


const CounterReducer = createSlice({
    name: 'CounterReducer',
    initialState: {
        minutes: 20,
        seconds: 0,
        start: false,
        paused: false,
    },
    reducers: {
        setMinutes: (state, action) => {
            state.minutes = action.payload
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload
            // console.log(action);
        },
        setStart: (state, action) => {
            state.start = action.payload
            // console.log(action);
        },
        setPaused: (state, action) => {
            state.paused = action.payload
            // console.log(action);
        },
    },
    
}); 

export const { setMinutes, setSeconds, setStart, setPaused, } = CounterReducer.actions;

export default CounterReducer.reducer
