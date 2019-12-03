import React from 'react';
import './SlideShow.scss';
import CircleSlide from 'components/CircleSlide/CircleSlide';

export default function SlideShow({tiles}:any) {
    return (
        <div style={{"position": "relative"}}>

            <div className="tiles">
                { tiles.map( (tile: any, i: any) => {
                    return (
                        <CircleSlide images={tile} key={i} />
                    )
                })} 
            </div>
        </div>

    )
}
