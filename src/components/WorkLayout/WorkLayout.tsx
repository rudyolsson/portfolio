import React from 'react';
import ProjectSection from 'components/ProjectSection';
import ArtysImg from 'assets/images/artys-screens.png';
import UmatchImg from 'assets/images/umatch-three-screens.png';
import FlexoImg from 'assets/images/flexo-three-screens.png';
import TokenUIImg from 'assets/images/token-admin-ui.png';
import Banner from 'components/Banner';

export default function WorkLayout() {
    const backgroundColors: string[] = ['#7dcc93', '#f76160', '#31355b', '#f8c687', '#21364b'];

    return (
        <>
            <Banner titleGreen="Work"></Banner>
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
        title: "Project Management Platform (FlexoBot)",
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