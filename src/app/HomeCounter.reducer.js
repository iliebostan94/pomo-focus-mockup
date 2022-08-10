import { combineReducers, createSlice } from "@reduxjs/toolkit"

// const initialState = {
//     minutes: 2,
//     seconds: 60,
//     header: "",
// }


export const CounterReducer = createSlice({
    name: 'counter',
    initialState: {
        minutes: 20,
        seconds: 0,
        start: false,
        paused: false,
    },
    reducers: {
        setMinutes: (state, action) => {
            state.minutes = action.payload
            return action;
        },
        setSeconds: (state, action) => {
            state.seconds = action.payload
            // console.log(action);
            return action;
        },
        setStart: (state, action) => {
            state.start = action.payload
            // console.log(action);
            return action;
        },
        setPaused: (state, action) => {
            state.paused = action.payload
            // console.log(action);
            return action;
        }
    },
}); 

export const MiscReducer = createSlice({
    name: 'MiscReducer',
    initialState: {
        testTime: 2,
        header: "",
        usernameInput: "",
        tasks: [
            {
            taskTitle: "Test title 1",
            taskDescription: "Test desc 1",
            },
            {
            taskTitle: "Test title 2",
            taskDescription: "Test desc 2",
            },
        ],
        taskTitle: "",
        taskDescription: "",
    },
    reducers: {
        addTime: (state, action) => {
            state.testTime = action.payload;
        },
        addHeader: (state, action) => {
            state.header = action.payload;
            // console.log(action);
        },
        addUsernameInput: (state, action) => {
            state.usernameInput = action.payload
            // console.log(action);
            // return action;
        },
        addTaskTitle: (state, action) => {
            state.taskTitle = action.payload;
            // console.log(action);
        },
        addTaskDescription: (state, action) => {
            state.taskDescription = action.payload;
            // console.log(action);
        },
        addTasks: (state, action) => {
            state.tasks = action.payload;
        },
    }
});


export const { setMinutes, setSeconds, setStart, setPaused, } = CounterReducer.actions;
export const { addTime, addHeader, usernameInput, addUsernameInput, taskTitle, addTaskTitle, 
    taskDescription, addTaskDescription, tasks, addTasks , } = MiscReducer.actions;


// export default CounterReducer.reducer;
// export default MiscReducer.reducer;

export default combineReducers({
    CounterReducer,
    MiscReducer,
})
