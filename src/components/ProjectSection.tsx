import React from 'react'
import styled from 'styled-components';
import FadeInUp from 'components/FadeInUp';

const Wrapper = styled.section`
    padding: 70px 30px;
    text-align: center;
    align-items: center;
    background-color: ${props => props.bgColor};
    color: #fff;
`;

const ScreenShot = styled.img.attrs({
    src: props => props.src
})`
    border-radius: 5px;
    max-height: 400px;
    max-width: 350px;
    @media (min-width: 768px) {
        max-height: 600px;
        max-width: 550px;
  }
`;

const Title = styled.h1`
    font-weight: bold;
    font-size: 2em;
`;

const Paragraph = styled.p`
    color: white;
    max-width: 700px;
    margin: 20px auto;
    font-size: 1.25em;
`;

const Tech = styled.p`
    font-size: 0.75em;
    margin: 5px 0 0 0;
`;

const Link = styled.a`
    background: #2b3d51;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 50px auto 0 auto;
    display: block;
    max-width: 300px;
    text-transform: uppercase;
    &:hover {
        cursor: pointer;
    }
`;

export default function ProjectSection({project}) {
    const { imgURL, bgColor, title, description, frontEnd, backEnd, siteURL, hideLink } = project;
    return (
        <Wrapper bgColor={bgColor}>
            <FadeInUp component={
            <ScreenShot src={imgURL}/>
            }/>
            <FadeInUp component={
            <Title>{title}</Title>
        }/>
            <FadeInUp component={
            <Paragraph>{description}</Paragraph>
        }/>
            <FadeInUp component={
            <Tech>{frontEnd}</Tech>
        }/>
            <FadeInUp component={
            <Tech>{backEnd}</Tech>
        }/>
            { hideLink || !siteURL ? '' : <FadeInUp component={
<Link href={siteURL} target="_blank">Visit Site</Link>}/>}
        </Wrapper>
    )
}
