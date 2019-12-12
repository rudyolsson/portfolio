import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Wrapper = styled.div`
    padding: 30px;
    background-color: #e0ebe8;
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

const Paragraph = styled.p`
    text-align: center;
    margin: 0 auto;
`;

const ParagraphSmall = styled(Paragraph)`
    font-size: 0.5em;
`;


export default function Footer() {
    return (
        <Wrapper>
            <FooterNav>
                <NavItem>
                    <a href="https://www.linkedin.com/in/rudy-olsson-bb2152161/" target="_blank">                        
                        <FaLinkedin/>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="https://github.com/rudyolsson" target="_blank">                        
                        <FaGithub/>
                    </a>
                </NavItem>
                <NavItem>
                    <a href="mailto:rudy@gmail.com" target="_blank">                        
                        <MdEmail/>
                    </a>
                </NavItem>
            </FooterNav>
            <div>
                <Paragraph>&#169; {new Date().getFullYear()} Rudy Olsson</Paragraph>
                <ParagraphSmall>Site Made With ReactJS</ParagraphSmall>
            </div>
        </Wrapper>
    )
}
