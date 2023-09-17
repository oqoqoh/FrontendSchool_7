import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rotateImage = keyframes`
    100% {
            transform: rotate(360deg);
    }
`;

const LogoClock = styled.img`
    fill: #fcee21;

    width: 220px;
    height: 220px;
    margin-top: 100px;
    animation: ${rotateImage} 10s linear infinite;
`;

const SectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
`;
const ImageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10px;
`;

const TextStyle = styled.p`
    color: #fff;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const SpanStyle = styled.span`
    color: #fff;
    font-family: Gmarket Sans;
    font-size: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const ModalOpenBtn = styled.button`
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

const ShareBtn = styled.button`
    padding: 21px 49px;

    border-radius: 56px;
    background: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    color: #5b2386;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export default function GoalCalc({ goal, days, showCalc, handleShowModal }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [showCalc]);

    if (loading)
        return (
            <ImageContainer>
                <LogoClock src="../img/yellowClock.svg" />
            </ImageContainer>
        );

    return (
        <SectionStyle>
            <TextStyle>
                당신은 <SpanStyle>{goal}</SpanStyle> 전문가가 되기 위해서
            </TextStyle>
            <TextStyle>
                대략 <SpanStyle>{days}</SpanStyle> 일 이상 훈련하셔야 합니다! :)
            </TextStyle>
            <div>
                <ModalOpenBtn type="button" onClick={() => handleShowModal()}>
                    훈련하러 가기 GO!GO!
                </ModalOpenBtn>
                <ShareBtn type="button">공유하기</ShareBtn>
            </div>
        </SectionStyle>
    );
}
