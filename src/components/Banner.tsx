import React from 'react'
import FancyButton from 'components/FancyButton/FancyButton';
import './Banner.scss';

const styles = {
    container: {
        backgroundColor: '#e0ebe8',
        textAlign:'center' as 'center',
        height: '350px',
        paddingTop: '100px',
    },
    title: {
        margin: 0,
        fontSize: '35px',
        zIndex: 1000,
        black: {
            marginRight: '7px',
            zIndex: 1000,
        },
        green: {
            color: '#45b29a',
            zIndex: 1000,
        }
    },
    subtitle: {
        zIndex: 1000,
        marginBottom: '50px',
        marginTop: '10px',
    }
};

export default function Banner({ titleGreen, subtitle, titleBlack, btnText }: any) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                <span style={styles.title.black}>{titleBlack}</span> 
                <span style={styles.title.green}>{titleGreen}</span>
            </h1>
            <p style={styles.subtitle}>{subtitle}</p>
            <FancyButton>{btnText}</FancyButton>
        </div>
   )
}
