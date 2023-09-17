import React, { useState } from 'react';
import styled from 'styled-components';

const SectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextStyle = styled.p`
    color: #fff;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const InputStyle = styled.input`
    width: 228px;
    height: 57px;
    flex-shrink: 0;

    border-radius: 7px;
    background: #fff;

    color: #babcbe;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const CalcBtn = styled.button`
    border-radius: 56px;
    background: #fcee21;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    padding: 21px 49px;

    color: #5b2386;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export default function GoalsInput({ handelGoal, handelDays, handleShowCalc }) {
    const [inputGoal, setInputGoal] = useState('');
    const [inputTime, setInputTime] = useState(0);

    const inputGoalhandler = (e) => {
        setInputGoal(e.target.value);
    };
    const inputTimehandler = (e) => {
        setInputTime(parseInt(e.target.value));
    };
    const calcBtnHandler = () => {
        if (!inputGoal || !inputTime) {
            alert('값을 입력해주세요.');
            return;
        }
        if (inputTime > 24) {
            alert('하루는 24시간입니다.');
            return;
        }
        handelGoal(inputGoal);
        handelDays(inputTime);
        handleShowCalc();
    };
    return (
        <SectionStyle>
            <TextStyle>
                나는 <InputStyle type="text" placeholder="예) 프로그래밍" onChange={inputGoalhandler}></InputStyle> 전문가가 될 것이다.
            </TextStyle>
            <TextStyle>
                그래서 앞으로 매일 하루에 <InputStyle type="number" placeholder="예) 5시간" onChange={inputTimehandler}></InputStyle> 시간씩 훈련할 것이다.
            </TextStyle>
            <CalcBtn
                type="button"
                onClick={() => {
                    calcBtnHandler();
                }}>
                나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </CalcBtn>
        </SectionStyle>
    );
}
