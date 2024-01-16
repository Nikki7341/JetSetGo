/* eslint-disable prettier/prettier */
// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../utils/reduxToolkit';

const store = configureStore({
    reducer: {
        data: apiReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
