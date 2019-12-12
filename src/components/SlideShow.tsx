import React from 'react';
import CircleSlide from 'components/CircleSlide/CircleSlide';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';

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

export default function SlideShow({tiles}:any) {
    return (
            <StyledDiv>
                { tiles.map( (tile: any, i: any) => {
                    return (
                            <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={i * 200} key={i}>
                                <CircleSlide images={tile} key={i} />
                            </ScrollAnimation>
                    )
                })} 
            </StyledDiv>
    )
}
