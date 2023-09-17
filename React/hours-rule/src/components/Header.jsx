import React from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const HeadStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoClock = styled.img`
    width: 220px;
    height: 220px;
    margin-top: 100px;
    position: relative;
`;

const Logo = styled.img`
    width: 560px;
    height: 110px;
    position: absolute;
    transform: translateY(150px);
`;

const Slogan = styled.p`
    color: #f5df4d;
    text-align: center;
    font-family: tvN Enjoystories;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 60px;
`;

const SubBold = styled.span`
    color: #fff;
    font-family: Gmarket Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

    margin-top: 78px;
`;

const SloganSub = styled.p`
    color: #fff;
    font-family: Gmarket Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export default function Header() {
    return (
        <HeadStyle>
            <LogoClock src="../img/clock.svg" />
            <Logo src="../img/logo.svg" />
            <Slogan>“연습은 어제의 당신보다 당신을 더 낫게 만든다.”</Slogan>
            <SloganSub>
                <SubBold>1만 시간의 법칙</SubBold>은 <br />
                어떤 분야의 전문가가 되기 위해서는 <br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </SloganSub>
        </HeadStyle>
    );
}
