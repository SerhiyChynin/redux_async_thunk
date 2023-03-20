import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slicers/user/userSlice';
import todoSlice from '../slicers/todo/todoSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
    },
})