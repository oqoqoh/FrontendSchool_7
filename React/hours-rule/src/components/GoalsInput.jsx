import React, { useState } from 'react';

export default function GoalsInput() {
    const [inputGoal, setInputGoal] = useState('');
    const [inputTime, setInputTime] = useState(0);

    const inputGoalhandler = (e) => {
        setInputGoal(e.target.value);
    };
    const inputTimehandler = (e) => {
        setInputTime(e.target.value);
    };
    return (
        <section>
            <p>
                나는 <input type="text" placeholder="예) 프로그래밍" value={inputGoal} onChange={inputGoalhandler}></input> 전문가가 될 것이다.
            </p>
            <p>
                그래서 앞으로 매일 하루에 <input type="number" placeholder="예) 5시간" value={inputTime} onChange={inputTimehandler}></input> 시간씩 훈련할 것이다.
            </p>
            <button type="button">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</button>
        </section>
    );
}
