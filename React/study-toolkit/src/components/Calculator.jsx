import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, subtractNumber, multiplyNumber, divideNumber, resetNumber } from '../store/calculator';

export default function Calculator() {
    const result = useSelector((state) => state.calculator.value);
    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState('');
    return (
        <>
            <div>결과: {result} </div>
            <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <div>
                <button
                    onClick={() => {
                        dispatch(addNumber(inputValue));
                    }}>
                    +
                </button>
                <button
                    onClick={() => {
                        dispatch(subtractNumber(inputValue));
                    }}>
                    -
                </button>
                <button
                    onClick={() => {
                        dispatch(divideNumber(inputValue));
                    }}>
                    /
                </button>
                <button
                    onClick={() => {
                        dispatch(multiplyNumber(inputValue));
                    }}>
                    *
                </button>
                <button
                    onClick={() => {
                        dispatch(resetNumber());
                    }}>
                    C
                </button>
            </div>
            <br />
        </>
    );
}
