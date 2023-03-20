import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../slicers/user/userSlice';

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
})