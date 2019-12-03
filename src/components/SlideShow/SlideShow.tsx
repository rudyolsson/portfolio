import React from 'react';
import './SlideShow.scss';

export default function SlideShow({tiles}:any) {
    return (
        <div style={{"position": "relative"}}>

            <div className="tiles">
                { tiles.map( (tile: any, i: any) => {
                    return (
                        <div className="tile" key={i}>
                            <div className="card front">
                            <img src={require(`assets/images/${tile.src}`)} alt={tile.name}/>
                            </div>
                            {/* <div className="card back">
                                
                            </div> */}
                    </div>
                    )
                })} 
            </div>
        </div>

    )
}
