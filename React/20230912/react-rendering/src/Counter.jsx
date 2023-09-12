import React from 'react';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function increment() {
        // automaic batching
        setCount(count + 1);
        setCount(count + 1);
        setCount2(count2 + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>
                Count 의 값은 :{count} / {count2}
            </h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
}
