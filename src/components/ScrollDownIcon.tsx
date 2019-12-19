import React from 'react'
import styled, { keyframes } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function ScrollDownIcon(): JSX.Element {

    const bounce = keyframes`
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-15px);
        }
    `;

    const Wrapper = styled.div`
        position: relative;
        margin: 20px auto 0 auto;
        height: 50px;
    `;

    const Icon = styled.div`
        text-align: center;
        margin: 10px 0;
        font-size: 2em;
        color: ${props => props.theme.mediumGreen};
        -moz-animation: ${bounce} 2s infinite;
        -webkit-animation: ${bounce} 2s infinite;
        animation: ${bounce} 2s infinite;
    `;

    return (
        <Wrapper>
            <Icon><MdKeyboardArrowDown/></Icon>
        </Wrapper>
    )
}
