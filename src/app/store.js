import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from '../app/HomeCounter.reducer';
import { MiscReducer } from '../app/HomeCounter.reducer';


const appReducers = combineReducers({
    time: CounterReducer
})

export const store = configureStore ({
    reducer: CounterReducer,
    reducer: MiscReducer,
});



