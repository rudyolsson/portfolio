import React, { useState, useEffect, useRef } from 'react'
import './Header.scss';
import signature from 'assets/images/signature.png';
import signatureGreen from 'assets/images/signature-green.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [activeClass, setActiveClass] = useState();
    const [activeClassSig, setActiveClassSig] = useState();
    const [scroll, setScroll ] = useState(0);
    const prevScroll = usePrevious(scroll) || 0;

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScroll(window.pageYOffset || document.documentElement.scrollTop);
        });
    })

     useEffect(() => {
         let activeClass = 'header-dark';
         let activeClassSig = 'show';
         if (scroll > 415) {
            activeClass = 'header-light';
            activeClassSig = 'hide';
         }
            setActiveClass(activeClass);
            setActiveClassSig(activeClassSig);
     })

    function usePrevious(value: any) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }

    return (
        <header className={`header ${activeClass}`}>
            <img src={signature} alt="signature" className={`signature signature-black ${activeClassSig}`}/>
            <img src={signatureGreen} alt="signature" className={`signature signature-green ${activeClassSig === 'show' ? 'hide' : 'show'}`}/>
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
