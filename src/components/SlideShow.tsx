import React, { HTMLAttributes } from 'react';
import CircleSlide from 'components/CircleSlide/CircleSlide';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import { TechIcon } from './types';

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 730px;
  position: relative;
  overflow: hidden;
  margin: 0 auto 20px auto;
`;

interface Props extends HTMLAttributes<HTMLElement> { 
    tiles: TechIcon[][]
 }

export default function SlideShow({tiles}: Props): JSX.Element {
    return (
            <StyledDiv>
                { tiles.map( (tile: TechIcon[], i: any) => {
                    return (
                            <ScrollAnimation animateIn="fadeInUp" offset={50} animateOnce={true} delay={i * 200} key={i}>
                                <CircleSlide images={tile} key={i} />
                            </ScrollAnimation>
                    )
                })} 
            </StyledDiv>
    )
}
