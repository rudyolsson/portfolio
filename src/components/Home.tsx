import React from 'react'
import Banner from 'components/Banner'
import avatar from 'assets/images/avatar.png';
import SlideShow from 'components/SlideShow';
import styled from 'styled-components';
import FadeInUp from './FadeInUp';

export default function Home() {
    const Section = styled.section`
        padding: 30px 60px;
        text-align: center;
    `;

    const SectionTop = styled.section`
        padding-top: 60px;
        padding-bottom: 30px;
        text-align: center;
        `;

    const Avatar = styled.img`
        height: 150px;
        background-color: #f5f5f5;
        border-radius: 50%;
        padding: 5px;
    `;

    const TitleSmall = styled.h5`
        font-size: 2em;
        color: #45b29a;
        margin: 20px auto;
    `;

    const TitleLarge = styled.h1`
        font-size: 3em;
        color: #1e836c;
        margin: 20px auto;
    `;

    const Paragraph = styled.p`
        max-width: 600px;
        margin: 0 auto;
        line-height: 2em;
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
            <Section>
                <Avatar src={avatar} alt="avatar"/>
                <TitleSmall>About</TitleSmall>
                <FadeInUp component={<Paragraph>I am a Canadian Expat and full-stack JavaScript developer with a passion for creating great user experiences. I bring with me a sincere drive and ability to learn on-the-fly; I love a challenge.</Paragraph>}/>
            </Section>
            <Section>
                <FadeInUp component={<TitleLarge>Tech</TitleLarge>}/>
                <SlideShow tiles={imageGroups}/>
                <FadeInUp delay={500} component={ <Paragraph>Here are some technologies I've worked with both in production and on personal projects.</Paragraph>}/>
            </Section>
        </>
    )
}

const imageGroups = [
    [{
        src: 'react.png',
        name: 'ReactJS'
    },
    {
        src: 'angular.png',
        name: 'Angular'
        
    },
    {
        src: 'nodejs.png',
        name: 'NodeJS',
    },
    {
        src: 'html.png',
        name: 'HTML'
    },
    {
        src: 'css.png',
        name: 'CSS'
    }],
    [{
        src: 'redux.png',
        name: 'Redux'
    },
    {
        src: 'ngrx.png',
        name: 'NgRx'
    },
    {
        src: 'mobx.png',
        name: 'Mobx',
    },
    {
        src: 'nestjs.png',
        name: 'NestJS'
    },
    {
        src: 'mobx.png',
        name: 'MobX'
    }],
    [{
        src: 'javascript.png',
        name: 'JavaScript'
        
    },
    {
        src: 'typescript.png',
        name: 'TypeScript'
    },
    {
        src: 'sass.png',
        name: 'Sass',
    },
    {
        src: 'postgres.png',
        name: 'PostgreSQL'
    },
    {
        src: 'docker.png',
        name: 'Docker'
    },
    {
        src: 'mongo.png',
        name: 'MongoDB'
    }], 
];