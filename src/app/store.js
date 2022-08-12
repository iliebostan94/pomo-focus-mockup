import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  CounterReducer from './HomeCounter.reducer';
import  MiscReducer from './Misc.reducer';
import  TaskReducer from './NewTask.reducer';


const appReducers = combineReducers({
    counterReducer : CounterReducer,
    miscReducer    : MiscReducer,
    tasksReducer    : TaskReducer,
})

const store = configureStore({
    reducer: appReducers
});

// export const store = configureStore ({
//    reducer: [ CounterReducer, MiscReducer, TaskReducer ]
// });

// export const store = configureStore({
//     reducer: appReducers
// });

// export const store = configureStore( CounterReducer, MiscReducer, TaskReducer );

export default store
