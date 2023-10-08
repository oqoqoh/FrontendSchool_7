import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addNumber: (state, action) => {
            state.value += Number(action.payload);
        },
        subtractNumber: (state, action) => {
            state.value -= Number(action.payload);
        },
        multiplyNumber: (state, action) => {
            state.value *= Number(action.payload);
        },
        divideNumber: (state, action) => {
            state.value /= Number(action.payload);
        },
        resetNumber: (state) => {
            state.value = 0;
        },
    },
});

export const { addNumber, subtractNumber, multiplyNumber, divideNumber, resetNumber } = calculatorSlice.actions;

export default calculatorSlice.reducer;
