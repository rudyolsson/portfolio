import React from 'react'
import FancyButton from 'components/FancyButton/FancyButton';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Wrapper = styled.div`
    background-color: #e0ebe8;
    text-align:center;
    height: 250px;
    padding-top: 100px;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 35px;
    z-index: 1000;
`;

const TitleBlack = styled.span`
    margin-right: 7px;
`;

const TitleGreen = styled.span`
    color: #45b29a;
`;

const Subtitle = styled.p`
    margin-bottom: 50px;
    margin-top: 10px;
`;

export default function Banner({ titleGreen, subtitle, titleBlack, btnText }: any) {
    return (
        <Wrapper>
            <Title>
                <TitleBlack>{titleBlack}</TitleBlack> 
                <TitleGreen>{titleGreen}</TitleGreen>
            </Title>
            <Subtitle>{subtitle}</Subtitle>
            <Link to="work" spy={true} smooth={true} offset={-100} duration={500} delay={200}>
                <FancyButton>{btnText}</FancyButton>
            </Link>
        </Wrapper>
   )
}