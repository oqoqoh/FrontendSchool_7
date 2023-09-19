import { useEffect, useRef, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const count3 = useRef(0);
    let count4 = 0;

    const handleCountUp = () => {
        setCount((prev) => prev + 1);
        console.log('count : ', count);
    };
    const handleCountUp2 = () => {
        setCount2((prev) => prev + 1);
        console.log('count2 : ', count2);
    };
    const handleCountUp3 = () => {
        count3.current = count3.current + 1;
        console.log('count3 : ', count3);
    };
    const handleCountUp4 = () => {
        count4 += 1;
        console.log('count4 : ', count4);
    };

    useEffect(() => {
        console.log('count 감시 중', count);
    }, [count]);

    return (
        <>
            <div>{count}</div>
            <button onClick={handleCountUp}>up</button>
            <div>{count2}</div>
            <button onClick={handleCountUp2}>up2</button>
            <div>{count3.current}</div>
            <button onClick={handleCountUp3}>up3</button>
            <div>{count4}</div>
            <button onClick={handleCountUp4}>up4</button>
        </>
    );
}

function App() {
    return (
        <div>
            {' '}
            <Counter />
        </div>
    );
}
export default App;
