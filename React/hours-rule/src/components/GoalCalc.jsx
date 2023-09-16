import React, { useEffect, useState } from 'react';

export default function GoalCalc() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) return <p>loading...</p>;

    return (
        <div>
            <p>
                당신은 <span>text</span>전문가가 되기 위해서
            </p>
            <p>
                대략 <span>text</span>일 이상 훈련하셔야 합니다! :)
            </p>
            <button type="button">훈련하러 가기 GO!GO!</button>
            <button type="button">공유하기</button>
        </div>
    );
}
