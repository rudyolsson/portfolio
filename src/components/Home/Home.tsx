import React from 'react'
import Banner from 'components/Banner'
import avatar from 'assets/images/avatar.png';

export default function Home() {
    return (
        <>
            <section style={{"paddingTop": "60px"}}>
                <Banner titleBlack="Hi, I'm" titleGreen="Rudy Olsson" subtitle="Web Developer"></Banner>
            </section>
            <section style={{"paddingTop": "60px", "textAlign": "center"}}>
                <img src={avatar} alt="avatar"/>

            </section>
        </>
    )
}
