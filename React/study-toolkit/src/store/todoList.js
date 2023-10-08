import { createSlice } from '@reduxjs/toolkit';

const initialState = { todos: [] };

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: state.todos.length,
                content: action.payload,
                isDone: false,
            };
            state.todos = [...state.todos, newTodo];
        },
        deleteTodo: (state, action) => {
            state.todos = [...state.todos].filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            state.todos = [...state.todos].map((todo) => (todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo));
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoListSlice.actions;

export default todoListSlice.reducer;
