import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default function FadeInUp({component, delay} : any) {
    return (
        <ScrollAnimation animateIn="fadeInUp" offset={50} duration={0.8} animateOnce={true} delay={delay || 0}>
            { component }
        </ScrollAnimation>
    )
}
