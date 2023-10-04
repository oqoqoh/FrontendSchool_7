import { createSlice } from '@reduxjs/toolkit';

const expenseSlice = createSlice({
    name: 'expenseSlice',
    initialState: {
        expenseList: [
            { name: 'coffee', price: 5000 },
            { name: 'pizza', price: 14000 },
        ],
        income: 1000000,
    },
    reducers: {
        addExpenseAction: (currentSlice, action) => {
            currentSlice.expenseList.push(action.payload);
        },
        setIncomeAction: (currentSlice, action) => {
            currentSlice.income = action.payload;
        },
    },
});

export const { addExpenseAction, setIncomeAction } = expenseSlice.actions;

export default expenseSlice.reducer;
