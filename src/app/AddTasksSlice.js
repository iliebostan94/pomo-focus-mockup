import { createSlice } from "@reduxjs/toolkit";

const AddTasksSlice = createSlice({
    name: 'AddTasksSlice',
    initialState: [
      {
      taskID: 1,
      taskTitle: "Test title 1",
      taskDescription: "Test desc 1",
      taskActive: false,
      },
      {
      taskID: 2,
      taskTitle: "Test title 2",
      taskDescription: "Test desc 2",
      taskActive: false,
      },
      {
      taskID: 3,
      taskTitle: "Test title 3",
      taskDescription: "Test desc 3",
      taskActive: false,
      },
    ],


    reducers: {
        addTask: (state, action) => {
        // console.log(state, action);
            const task = {
                taskID: Date.now(),
                taskTitle: action.payload.taskTitle,
                taskDescription: action.payload.taskDescription,
                taskActive: action.payload.taskActive,
            };
            state.push(task);


        },

        toggleActive: (state, action) => {
          // const index = state.findIndex( (task) => task.taskID === action.payload.taskID );
          // state[index].taskActive = action.payload.taskActive;

          state.forEach((task) => 
          task.taskID === action.payload.taskID ? task.taskActive = true : task.taskActive = false
          );

        },
    },


});

export const { addTask, toggleActive } = AddTasksSlice.actions;

export default AddTasksSlice.reducer;
