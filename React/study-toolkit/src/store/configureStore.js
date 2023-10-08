import { configureStore } from '@reduxjs/toolkit';
import calculator from './calculator';
import todoList from './todoList';
const store = configureStore({
    reducer: { calculator, todoList },
});

export default store;
