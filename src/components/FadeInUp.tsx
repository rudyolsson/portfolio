import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default function FadeInUp({component, delay} : any) {
    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={delay || 0}>
            { component }
        </ScrollAnimation>
    )
}
