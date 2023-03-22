import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    posts: [],
}
export const getPosts = createAsyncThunk(
    'posts/getPosts', //имя состоящие из имени слайса и название константы через слеш
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPosts(res.data))
        console.log(res.data);
    }
);

export const removePostById = createAsyncThunk(
    'posts/removePostById',
    async (id, {rejectWithValue, dispatch}) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(removePosts(id))
    }
)

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {            
            const half = action.payload.filter(item => item.id % 2 === 0);
            state.posts = action.payload;
            // state.posts = half;

        },
        removePosts: (state, action) => {
            console.log(action);
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('getPost: fulfilled'),
        [getPosts.pending]: () => console.log('getPost: pending'),
        [getPosts.rejected]: () => console.log('getPost: rejected'),
        [removePostById.fulfilled]: () => console.log('removePost: fulfilled'),
        [removePostById.pending]: () => console.log('removePost: pending'),
        [removePostById.rejected]: () => console.log('removePost: rejected'),
        
    }
})

export const { setPosts, removePosts } = postSlice.actions;
export default postSlice.reducer;