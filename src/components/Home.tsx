import React from 'react'
import Banner from 'components/Banner'
import avatar from 'assets/images/ro.png';
import flag from 'assets/images/flag.png';
import styled from 'styled-components';
import FadeInUp from './FadeInUp';

export default function Home() {
    const Section = styled.section`
        padding: 30px 60px;
        text-align: center;
    `;

    const SectionTop = styled.section`
        padding-top: 60px;
        padding-bottom: 0;
        text-align: center;
        `;

    const Avatar = styled.img`
        height: 100px;
        width: 100px;
        background-color: #f5f5f5;
        border-radius: 50%;
        padding: 5px;
        @media(min-width: 450px) {
            height: 150px;
            width: 150px;
        }
    `;

    const TitleSmall = styled.h5`
        font-size: 2em;
        color: #45b29a;
        margin: 20px auto;
    `;

    const Paragraph = styled.p`
        max-width: 600px;
        margin: 0 auto;
        line-height: 2em;
    `;

    const Flag = styled.img`
        height: 52px;
        position: absolute;
        left: 50px;
        top: 204px;
        @media(min-width: 450px) {
            left: 100px;
        }
    `;

    return (
        <>
            <SectionTop>
                <Banner 
                    titleBlack="Hi, I'm" 
                    titleGreen="Rudy Olsson" 
                    subtitle="Web Developer" 
                    btnText="View My Work">
                </Banner>
            </SectionTop>
            <Section className="forest">
                <Flag  src={flag} alt="flag"/>
                <Avatar src={avatar} alt="avatar"/>
                <TitleSmall>About</TitleSmall>
                <FadeInUp component={<Paragraph>I am a Canadian Expat and full-stack JavaScript developer with a passion for creating great user experiences. I bring with me a sincere drive and ability to learn on-the-fly; I love a challenge.</Paragraph>}/>
            </Section>
        </>
    )
}