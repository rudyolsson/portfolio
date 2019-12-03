import React from 'react'
import Banner from 'components/Banner'
import avatar from 'assets/images/avatar.png';
import SlideShow from 'components/SlideShow/SlideShow';

export default function Home() {
    const styles = {
        section: {
            padding: '60px', 
            textAlign:'center' as 'center',
        },
        avatar: {
            height: '150px',
            backgroundColor: '#f5f5f5',
            borderRadius: '50%',
            padding: '5px',
        },
        titleSmall: {
            fontSize: '2em',
            color: '#45b29a',
            margin: '20px auto',
        },
        titleLarge: {
            fontSize: '3em',
            color: '#1e836c',
            margin: '20px auto',
        },
        paragraph: {
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '2em'
        }

    };

    return (
        <>
            <section style={{"paddingTop": "60px"}}>
                <Banner titleBlack="Hi, I'm" titleGreen="Rudy Olsson" subtitle="Web Developer"></Banner>
            </section>
            <section style={styles.section}>
                <img src={avatar} alt="avatar" style={styles.avatar}/>
                <h5 style={styles.titleSmall}>About</h5>
                <p style={styles.paragraph}>I am a Canadian Expat and full-stack JavaScript developer with a passion for creating great user experiences. I bring with me a sincere drive and ability to learn on-the-fly; I love a challenge.</p>
            </section>
            <section style={styles.section}>
                <h5 style={styles.titleLarge}>Tech</h5>
                <SlideShow tiles={imageGroups}/>
                <p>Here are some technologies I've worked with both in production and on personal projects.</p>
            </section>
            <section style={styles.section}>
                <h5 style={styles.titleLarge}></h5>
            </section>
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