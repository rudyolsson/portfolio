import React from 'react';
import ProjectSection from 'components/ProjectSection';
import ArtysImg from 'assets/images/artys-screens.webp';
import UmatchImg from 'assets/images/umatch-three-screens.webp';
import FlexoImg from 'assets/images/flexo-three-screens.webp';
import TokenUIImg from 'assets/images/token-admin-ui.webp';
import styled from 'styled-components';
import FadeInUp from 'components/FadeInUp';
import FancyButton from 'components/FancyButton/FancyButton';
import { MdMail } from 'react-icons/md';
import ScrollDownIcon from './ScrollDownIcon';

export default function WorkLayout() {
    const backgroundColors: string[] = ['#1e836c', '#7dcc93', '#f76160', '#31355b', '#f8c687', '#21364b'];
    const Section = styled.section`
        padding: 30px 60px;
        text-align: center;
        position: relative;
    `;

     const Paragraph = styled.p`
        max-width: 600px;
        margin: 0 auto;
        line-height: 2em;
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

    const Anchor = styled.a`
        text-decoration: none;
    `;


    return (
        <>
            <Section>
                <FadeInUp component={ <TitleSmall>What I've worked on recently</TitleSmall>}/>
                <FadeInUp component={<Paragraph>Here are some projects that I have worked on recently. For more information visit the sites, or to see what personal projects I've been working on check out my <Anchor href="https://github.com/rudyolsson">GitHub.</Anchor></Paragraph>}/>
            </Section>
            <ScrollDownIcon />

            { projects.map((project, i) => {
                return (
                    <ProjectSection project={{
                        ...project, 
                        bgColor: backgroundColors[i],
                    }}
                    key={project.title}
                    />
                )
            })}
            <Section>
                <TitleLarge>Let's Chat</TitleLarge>
                <FadeInUp component={<Anchor href="mailto:rudy@gmail.com"><FancyButton><MdMail/> Message Me</FancyButton></Anchor>}/>
                <FadeInUp component={<Paragraph>If you are interested in working together or just fancy saying hey, reach out.</Paragraph>}/>
            </Section>
            
        </>
    )
}


const projects = [
    {
        imgURL: ArtysImg,
        title: "Artys Music Platform",
        description: "Artys is a music platform and API to discover, vote on, and favourite music. User's can allocate their monthly subscription fee directly to artists with help from a secure blockchain who in turn can give percentages of the songs rights to .",
        frontEnd: "Front End: Angular 8, MobX, RxJs",
        backEnd: "Back End: NextJS (Express), ObjectionJS, KnexJS, PostgreSQL, Docker",
        siteURL: "https://artys.io",

    },
    {
        imgURL: UmatchImg, 
        title: "UMatch Artist Platform and Admin UIs",
        description: "UIs and API for artists to upload and manage their music on Artys Music as well as a Shapr-like mechanism for collaborating and messaging with other artists.",
        frontEnd: "Front End: Angular 8, MobX, RxJs",
        backEnd: "Back End: NextJS (Express), ObjectionJS, KnexJS, PostgreSQL, Docker",
        siteURL: "https://umatch.io",
    },
    {
        imgURL: FlexoImg,
        title: "Project Management Platform",
        description: "An internal platform and API to manage projects. Highly integrated with the GitLab API in order to create and monitor milestones, issues, and commits. Integration with Slack to collect daily project management. Connected to Google Spreadsheets for transforming client quotes to Agile project breakdowns in GitLab.",
        frontEnd: "Front End: Angular 8, MobX, RxJs",
        backEnd: "Back End: ExpressJS, PostgreSQL, Docker",
        hideLink: true,
    },
    {
        imgURL: TokenUIImg, 
        title: "Token Investment Platform",
        description: "API and UI's for administrators and users to buy and sell tokenized resources as well as monitor resources saved to the blockchain.",
        frontEnd: "Front End: Angular 8, NgRx, RxJS",
        backEnd: "Back End: NestJS (Express), TypeORM, PostgreSQL, Docker",
        hideLink: true,
    },
];