import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sale, soldOut } from '../modules/stockCounter';

export default function StockCounter({ stock }) {
    const { message } = useSelector((state) => {
        return {
            message: state.stockReducer.message,
        };
    });

    const dispatch = useDispatch();

    useEffect(() => {
        if (stock > 0) dispatch(sale());
        else dispatch(soldOut());
    }, [stock]);

    return <div>{message}</div>;
}
