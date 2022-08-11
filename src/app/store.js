import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer , MiscReducer , TaskReducer, } from '../app/HomeCounter.reducer';

// const appReducers = combineReducers({
//     time: CounterReducer
// })

export const store = configureStore ({
    reducer: CounterReducer,
    reducer: MiscReducer,
    reducer: TaskReducer,
});



