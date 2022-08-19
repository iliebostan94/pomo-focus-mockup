import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const initialState = [
    {
    taskID: 0,
    taskTitle: "Test title 1",
    taskDescription: "Test desc 1",
    },
    {
    taskID: 1,
    taskTitle: "Test title 2",
    taskDescription: "Test desc 2",
    },
    {
    taskID: 3,
    taskTitle: "Test title 3",
    taskDescription: "Test desc 3",
    },
]


export const NewTaskReducer = createSlice({
    name: 'NewTaskReducer',
    initialState,
        reducers: {
            addTaskReducer: (state, action) => {
            // console.log(state, action);
                const addNewTask = {
                    taskID: Date.now(),
                    taskTitle: action.payload.taskTitle,
                    taskDescription: action.payload.taskDescription,
                };
                state.push({...state, addNewTask});
            }
        },


});

export const { addNewTask } = NewTaskReducer.actions;

export default NewTaskReducer.reducer;
