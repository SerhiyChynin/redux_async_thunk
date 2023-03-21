import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slicers/user/userSlice';
import todoSlice from '../slicers/todo/todoSlice';
import postSlice from '../slicers/post/postSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
        todo: todoSlice,
        posts: postSlice
    },
})