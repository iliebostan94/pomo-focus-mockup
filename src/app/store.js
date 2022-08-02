import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CounterReducer } from '../MainComponents/HomeCounter/HomeCounter.reducer';
import { MiscReducer } from '../MainComponents/HomeCounter/HomeCounter.reducer';


const appReducers = combineReducers({
    time: CounterReducer
})

export const store = configureStore ({
    reducer: CounterReducer,
    reducer: MiscReducer,
});



