import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  CounterReducer from './HomeCounter.reducer';
import  MiscReducer from './Misc.reducer';
import  NewTaskReducer from './NewTask.reducer';
import  AddTasksSlice from './AddTasksSlice';


const appReducers = combineReducers({
    counterReducer : CounterReducer,
    miscReducer    : MiscReducer,
    // newTaskReducer : NewTaskReducer,
    addTasks       : AddTasksSlice,
})

const store = configureStore({
    reducer: appReducers
});

export default store
