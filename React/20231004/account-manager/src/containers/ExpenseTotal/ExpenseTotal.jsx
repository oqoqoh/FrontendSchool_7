import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function ExpenseTotal() {
    const expenseList = useSelector((store) => store.expense.expenseList);
    const income = useSelector((store) => store.expense.income);
    const [expenseTotal, setExpenseTotal] = useState(0);

    useEffect(() => {
        expenseList.map((item) => setExpenseTotal((prev) => (prev += item.price)));
        return () => {
            setExpenseTotal(0);
        };
    }, [expenseList]);

    // reduce를 이용해 모든 price를 더합니다.
    //  const totalExpense = expenseList.reduce((acc, item) => {
    //     return acc + item.price
    // }, 0);
    // 잔액을 계산합니다.
    //const balance = income - totalExpense;

    return (
        <>
            <div>
                <span>총 지출 : </span>
                <span>₩ {expenseTotal}</span>
            </div>
            <div>
                <span>잔액 : </span>
                <span>₩ {income - expenseTotal}</span>
            </div>
        </>
    );
}
