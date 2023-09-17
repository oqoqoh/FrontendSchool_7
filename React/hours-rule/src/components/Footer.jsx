import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    padding-top: 70px;
    padding-bottom: 10px;
`;

const Text = styled.p`
    color: #fff;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Logo = styled.img`
    width: 125px;
    height: 25px;
    flex-shrink: 0;
`;

export default function Footer() {
    return (
        <Container>
            <Logo src="../img/위니브.svg" />
            <Text>
                ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.
                <br />
                수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
            </Text>
        </Container>
    );
}
