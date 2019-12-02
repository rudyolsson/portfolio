import React from 'react'
import './FancyButton.scss';

export default function FancyButton({children, handleClick}: any) {
    return (
        <button className="button" onClick={handleClick}>
            {children}
            <div className="button__horizontal"></div>
            <div className="button__vertical"></div>
        </button>
    )
}
