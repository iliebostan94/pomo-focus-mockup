import { combineReducers, createSlice } from "@reduxjs/toolkit"


export const CounterReducer = createSlice({
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

export const MiscReducer = createSlice({
    name: 'MiscReducer',
    initialState: {
        testTime: 2,
        header: "",
        usernameInput: "",
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
        },
        addTaskTitle: (state, action) => {
            state.taskTitle = action.payload;
            // console.log(action);
        },
        addTaskDescription: (state, action) => {
            state.taskDescription = action.payload;
            // console.log(action);
        },
    },
});

export const TaskReducer = createSlice({
    name: 'TaskReducer',
    initialState: {
        testingVar : "testtting",
        tasks: [
            {
            // taskID: 0,
            taskTitle: "Test title 1",
            taskDescription: "Test desc 1",
            },
            {
            // taskID: 1,
            taskTitle: "Test title 2",
            taskDescription: "Test desc 2",
            },
        ],
    },
    reducers: {
        addTasks: (state, action) => {
            state.tasks = action.payload;
            console.log(action);
        },
        nextTaskId(tasks) {
            const maxId = tasks.reduce((maxId, task) => Math.max(task.taskID, maxId), -1);
            return maxId + 1;
        },
    }
});




export const { setMinutes, setSeconds, setStart, setPaused, } = CounterReducer.actions;
export const { addTime, addHeader, usernameInput, addUsernameInput, taskTitle, addTaskTitle, 
    taskDescription, addTaskDescription, } = MiscReducer.actions;
export const { testingVar, tasks, addTasks, nextTaskId,  } = TaskReducer.actions;


// export default CounterReducer.reducer;
// export default MiscReducer.reducer;

export default combineReducers({
    CounterReducer,
    MiscReducer,
    TaskReducer,
})

