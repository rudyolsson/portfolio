import React, { useState, useEffect, useRef } from 'react'
import './Header.scss';
import signature from 'assets/images/signature.png';
import { Link } from 'react-router-dom';

export default function Header() {
    const [activeClass, setActiveClass] = useState();
    const [scroll, setScroll ] = useState(0);
    const prevScroll = usePrevious(scroll) || 0;

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            setScroll(window.pageYOffset || document.documentElement.scrollTop);
        });
    })

     useEffect(() => {
         let activeClass = 'header-dark';
         if (scroll > 400) {
            activeClass = 'header-light';
         }
            setActiveClass(activeClass);
     })

    //  window.addEventListener('scroll', () => {
    //     let activeClass = 'hide';
    //     console.log(window.scrollY);
    //     if (window.scrollY === 0){
    //         activeClass = '';
    //     }
    //     setActiveClass(activeClass);
    //  });


    function usePrevious(value: any) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        }, [value]);
        return ref.current;
      }

    return (
        <header className={`header ${activeClass}`}>
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
