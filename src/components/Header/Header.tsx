import React from 'react'
import './Header.scss';
import signature from 'assets/images/signature.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <img src={signature} alt="signature" className="signature"/>
            <nav className="nav shift">
                <ul>
                    <li>
                        <Link to="/">About</Link>
                        <Link to="/work">Work</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
