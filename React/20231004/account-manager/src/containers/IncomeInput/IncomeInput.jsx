import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIncomeAction } from '../../store/expense/expense-slice';

export default function IncomeInput() {
    const income = useSelector((store) => store.expense.income);
    const dispatch = useDispatch();

    const handleIncome = (e) => {
        dispatch(setIncomeAction(parseInt(e.target.value)));
    };

    return (
        <label>
            수입 입력 :
            <input type="number" defaultValue={income} placeholder="예) 30000" onChange={handleIncome} />
        </label>
    );
}
