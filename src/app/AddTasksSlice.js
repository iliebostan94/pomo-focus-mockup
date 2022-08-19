import { createSlice } from "@reduxjs/toolkit";

const AddTasksSlice = createSlice({
    name: 'AddTasksSlice',
    initialState: [
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
    ],

    reducers: {
        addTask: (state, action) => {
        // console.log(state, action);
            const newTask = {
                taskID: Date.now(),
                taskTitle: action.payload.taskTitle,
                taskDescription: action.payload.taskDescription,
            };
            state.push(newTask);
        }
    },


});

export const { addTask } = AddTasksSlice.actions;

export default AddTasksSlice.reducer;
