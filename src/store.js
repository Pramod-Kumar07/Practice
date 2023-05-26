import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './component/counterSlice';

const store = configureStore({
    reducer:{
        counter: counterReducer,
    }
})

export default store;