import React from 'react'

const styles = {
    container: {
        backgroundColor: '#c9d7d8',
        textAlign:'center' as 'center',
        minHeight: '50vh',
    },
    h1: {

    }


};

export default function Banner({ title, subtitle }: any) {
    return (
        <div style={styles.container}>
            <h1 style={styles.h1}>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}
