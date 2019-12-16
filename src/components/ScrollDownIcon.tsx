import React from 'react'
import styled, { keyframes } from 'styled-components';

export default function ScrollDownIcon() {

    const scroll = keyframes`
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            transform: translateY(46px);
        }
    `;

    const Wrapper = styled.div`
        position: relative;
        margin: 10px auto;
        height: 70px;
    `;

    const Icon = styled.div`
        &,
        &:before {
            position: absolute;
            left: 50%;
        }
        width: 25px;
        height: 40px;
        margin-left: -20px;
        top: 50%;
        margin-top: -35px;
        box-shadow: inset 0 0 0 1px #45b29a;
        border-radius: 25px;
        border-color: green;
        &:before {
            content: '';
            width: 8px;
            height: 8px;
            background: #45b29a;
            margin-left: -4px;
            top: 8px;
            border-radius: 4px;
            animation: ${scroll} 1.5s infinite;
            border-color: green;
        }
    `;


    return (
        <Wrapper>
            <Icon/>
        </Wrapper>
    )
}
