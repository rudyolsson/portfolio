import React from 'react'
import './Header.scss';
import avatar from 'assets/images/avatar.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <img src={avatar} alt="avatar" className="avatar"/>
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
