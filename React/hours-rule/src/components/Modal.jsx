import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 50%;
    height: 60%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #fff;
    border-radius: 10px;

    z-index: 1;
    overflow: auto;
`;

const Text = styled.p`
    color: #5b2386;
    text-align: center;
    font-family: tvN Enjoystories;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
`;

const TextSub = styled.p`
    color: #5b2386;
    text-align: center;
    font-family: tvN Enjoystories;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Image = styled.img`
    width: 250px;
`;

const ModalCloseBtn = styled.button`
    margin-top: 30px;
    border-radius: 56px;
    background: #fcee21;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

    padding: 11px 39px;

    color: #5b2386;
    text-align: center;
    font-family: Gmarket Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export default function Modal({ handleShowModal }) {
    return (
        <ModalContainer>
            <Text>화이팅!!♥♥♥</Text>
            <TextSub>당신의 꿈을 응원합니다!</TextSub>
            <Image src="../img/licat.svg"></Image>
            <ModalCloseBtn onClick={() => handleShowModal()}>종료하고 진짜 훈련하러 가기 GO!GO!</ModalCloseBtn>
        </ModalContainer>
    );
}
