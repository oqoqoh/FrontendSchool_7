import React from 'react';
import styled, { css } from 'styled-components';

// v1
// const ButtonOne = styled.button`
//     background-color: royalblue;
//     color: white;
//     margin: 10px;
//     border: none;
// `;

// const ButtonTwo = styled(ButtonOne)`
//     border-radius: 10px;
//     color: black;
// `;
// const ButtonThree = styled(ButtonOne)`
//     border-radius: 10px;
//     background-color: limegreen;
// `;

// v2
const BorderNone = css`
    border: none;
`;

const BorderRadius = css`
    border-radius: 8px;
`;

const BoxShadow = css`
    box-shadow: 0 0 5px #33333333;
`;

// const ButtonOne = styled.button`
//     background-color: royalblue;
//     color: white;
// `;

// const ButtonTwo = styled(ButtonOne)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     color: black;
// `;
// const ButtonThree = styled(ButtonOne)`
//     ${BorderNone}
//     ${BorderRadius}
//     ${BoxShadow}
//     background-color: limegreen;
// `;

// v3
const ButtonOne = styled.button`
    background-color: royalblue;
    color: white;
`;

const ExtendedBtn = styled(ButtonOne)`
    ${BorderNone}
    ${BorderRadius}
    ${BoxShadow}
    color: ${(props) => props.color};
    background-color: ${(props) => props.bgColor};
`;

export default function App6() {
    return (
        <>
            <ButtonOne>btn1</ButtonOne>
            {/* <ButtonTwo>btn2</ButtonTwo>
            <ButtonThree>btn3</ButtonThree> */}
            <ExtendedBtn color="black" bgColor="blue">
                btn2
            </ExtendedBtn>
            <ExtendedBtn color="white" bgColor="lime">
                btn3
            </ExtendedBtn>
        </>
    );
}
