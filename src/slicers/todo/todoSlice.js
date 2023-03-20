import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action.payload);
            state.todos.push(action.payload);
        },
        toggleCompleted: (state, action) => {
            console.log(action.payload);
            console.log(state.todos.find((todo) => todo));
            const toggleTodo = state.todos.find((todo) => todo.id === action.payload);
            toggleTodo.completed = !toggleTodo.completed; 
        }
    }
});

export const { addTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;