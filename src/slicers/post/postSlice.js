import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {axios} from 'axios';


const initialState = {
    posts: [],
}
export const getPosts = createAsyncThunk(
    'posts/getPosts', //имя состоящие из имени слайса и название константы через слеш
    async (_,{rejectWithValue, dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts') 
        dispatch(setPosts(res.data))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            console.log((state.posts));
            state.posts = action.payload;
        },
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fullfiald'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
    }
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;