import { combineReducers, createSlice } from "@reduxjs/toolkit";

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
            state.usernameInput = action.payload;
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

export const { addTime, addHeader, addUsernameInput, addTaskTitle, addTaskDescription, } = MiscReducer.actions;

export default MiscReducer.reducer
