import { createSlice } from '@reduxjs/toolkit';

// const initialState = [];

// const addTodoReducer = createSlice({
//     name: "todo",
//     initialState,
//     reducers: {
//         addTodos: (state, action) => {
//             state.push(action.payload);
//             return state;
//         }
//     }
// });


let nextTodoId = 0;

export const addTodo = content => ({
  type: 'add_todo',
  payload: {
    id: ++nextTodoId,
    content
  }
});


// export const { addTodos } = addTodoReducer.actions; 
// export const addTasks = addTodoReducer.reducer;
