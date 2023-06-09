import React from 'react'
import { useDispatch } from 'react-redux'
import {removeTodo, toggleCompleted} from '../slicers/todo/todoSlice'

const TodoItem = (todo) => {
    const dispatch = useDispatch();
    const toggleTodoHandler = (id) => {
        dispatch(toggleCompleted(id));
    }
    const deleteHandler = (id) => {
        dispatch(removeTodo(id));
    }
    return (
        <div className='flex justify-between items-center my-2'>
            <div className='text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400'
            onClick={()=>toggleTodoHandler(todo.todo.id)}>
                Complete 
            </div>
            <div className={`text-sm ${todo.todo.completed ? 'line-through font-medium text-lime-400' : ''}`}>
                {todo.todo.text}
            </div>
            <div className='text-sm px-4 py-2 flex bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
            onClick={() => deleteHandler(todo.todo.id)}
            >
                Delete
            </div>
        </div>
    )
}

export default TodoItem
