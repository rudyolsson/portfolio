import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import FadeInUp from './FadeInUp';

const Wrapper = styled.div`
    padding: 30px;
    background-color: ${props => props.theme.lightGreen};
    color: #1e836c;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const FooterNav = styled.ul`
    list-style: none;
    display: flex;
    max-width: 500px;
    justify-content: space-around;
    margin: 30px auto 0 auto;
    width: 100%;
    padding: 0;
`;

const NavItem = styled.li`
    font-size: 2.5em;
    &:hover {
        cursor: pointer;
    }
`;

const Anchor = styled.a`
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
`;

const Paragraph = styled.p`
    text-align: center;
    margin: 0 auto;
`;

const ParagraphSmall = styled(Paragraph)`
    font-size: 0.5em;
`;


export default function Footer(): JSX.Element {
    return (
        <FadeInUp  component={ 
        <Wrapper>
            <FooterNav>
                <FadeInUp  
                delay={200}
                component={ 
                    <NavItem>
                        <Anchor href="https://www.linkedin.com/in/rudy-olsson-bb2152161/" target="_blank">                        
                            <FaLinkedin/>
                        </Anchor>
                    </NavItem>
                }/>
                <FadeInUp  
                delay={400}
                component={ 
                    <NavItem>
                        <Anchor href="https://github.com/rudyolsson" target="_blank">                        
                            <FaGithub/>
                        </Anchor>
                    </NavItem>
                }/>
                <FadeInUp  
                delay={600}
                component={ 
                    <NavItem>
                        <Anchor href="mailto:rudyolsson.contact@gmail.com" target="_blank">                        
                            <MdEmail/>
                        </Anchor>
                    </NavItem>
                }/>
            </FooterNav>
            <div>
                <Paragraph>&#169; {new Date().getFullYear()} Rudy Olsson</Paragraph>
                <ParagraphSmall>Site Made With ReactJS</ParagraphSmall>
            </div>
        </Wrapper>
        }/>
    )
}
