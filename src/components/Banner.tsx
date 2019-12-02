import React from 'react'
import FancyButton from 'components/FancyButton/FancyButton';

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
        black: {
            marginRight: '7px',
        },
        green: {
            color: '#45b29a',
        }
    }


};

export default function Banner({ titleGreen, subtitle, titleBlack }: any) {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>
                <span style={styles.title.black}>{titleBlack}</span> 
                <span style={styles.title.green}>{titleGreen}</span>
            </h1>
            <p>{subtitle}</p>
            <FancyButton>View My Work</FancyButton>
        </div>
   )
}
