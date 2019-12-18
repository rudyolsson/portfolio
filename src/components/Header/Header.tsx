import React, { useState, useEffect } from 'react'
import './Header.scss';
import signature from 'assets/images/signature.png';
import signatureGreen from 'assets/images/signature-green.png';
import styled from 'styled-components';
import { Link } from 'react-scroll';

export default function Header() {


   
    const [activeClass, setActiveClass] = useState();
    const [activeClassSig, setActiveClassSig] = useState();
    const [scroll, setScroll ] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScroll(window.pageYOffset || document.documentElement.scrollTop);
        });
    })

     useEffect(() => {
         let activeClass = 'header-dark';
         let activeClassSig = 'show';
         if (scroll > 415) {
            activeClass = 'header-light two';
            activeClassSig = 'hide';
         }
            setActiveClass(activeClass);
            setActiveClassSig(activeClassSig);
     }, [scroll])

    return (
        <StyledHeader className={`header ${activeClass}`}>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500} delay={200}>
            <Signature src={signature} alt="signature" className={`signature signature-black ${activeClassSig}`}/>
            <Signature src={signatureGreen} alt="signature" className={`signature signature-green ${activeClassSig === 'show' ? 'hide' : 'show'}`}/>
            </Link>
            <nav className="nav shift">
                <NavUL>
                  <Link to="home" spy={true} smooth={true} offset={430} duration={500} delay={200}><Anchor >About</Anchor></Link>
                  <Link to="work" spy={true} smooth={true} offset={-100} duration={500} delay={200}><Anchor>Work</Anchor></Link>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500} delay={200}><Anchor>Contact</Anchor></Link>
                </NavUL>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed; 
    top: 0;
    transition: all .6s;
    width: 100%;
    height: 60px;
    z-index: 1000;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
    &-dark {
        background-color: $light-green;
    }
    &-light {
        background-color: white;
        box-shadow: 0 5px 7px -2px rgba(0, 0, 0, 0.2);
    }
`;

const Signature = styled.img`
    height: 50px;
    transition: all .5s;
    cursor: pointer;
    &-green {
      position: absolute;
      left: 32px;
      opacity: 0;
    }
    &-black {
      opacity: 1;
    }
`;

const NavUL = styled.ul`
    list-style: none;
    text-align: center;
    margin: 10px 50px 0 0;
    display: flex;
`;

const Anchor = styled.span`
    display: block;
    padding: 5px;
    text-decoration: none;
    color: $dark-green;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0 10px;
    text-decoration: none;
    position: relative;
    color: inherit;
    &::after {
    position: absolute;
    content: "";
    height: .1em;
    top: 100%;
    background: currentColor;
    z-index: -1;
    left: 0;
    right: 0;
    transform: scaleX(0);
    transition: transform .5s cubic-bezier(.95, .05, .795, .035);
  }
  
  &:hover::after {
    transition-timing-function: cubic-bezier(.19, 1, .22, 1);  
    transform: scaleX(1);
  }
  &:hover {
    cursor: pointer; 
  }
`;
  
 