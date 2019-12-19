import React, { HTMLAttributes } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

interface Props extends HTMLAttributes<HTMLElement> { 
    component: JSX.Element;
    delay?: number;
}

export default function FadeInUp({component, delay}: Props): JSX.Element {
    return (
        <ScrollAnimation animateIn="fadeInUp" offset={50} duration={0.8} animateOnce={true} delay={delay || 0}>
            { component }
        </ScrollAnimation>
    )
}
