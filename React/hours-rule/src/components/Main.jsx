import React, { useState } from 'react';
import GoalsInput from './GoalsInput';
import GoalCalc from './GoalCalc';
import Modal from './Modal';
import styled from 'styled-components';

const MainStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
`;

export default function Main() {
    const [goal, setGoal] = useState('');
    const [days, setDays] = useState(0);
    const [showCalc, setShowCalc] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handelGoal = (val) => {
        setGoal(val);
    };
    const handelDays = (val) => {
        setDays(parseInt(10000 / val));
    };
    const handleShowCalc = () => {
        setShowCalc((prev) => !prev);
    };
    const handleShowModal = () => {
        setShowModal((prev) => !prev);
    };
    return (
        <section>
            <GoalsInput handelGoal={handelGoal} handelDays={handelDays} handleShowCalc={handleShowCalc} />
            {showCalc ? <GoalCalc goal={goal} days={days} showCalc={showCalc} handleShowModal={handleShowModal} /> : null}

            {showModal ? <Modal handleShowModal={handleShowModal} /> : null}
        </section>
    );
}
