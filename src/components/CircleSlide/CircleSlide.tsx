import React from 'react'
import './CircleSlide.scss';

export default function CircleSlide({ images } : any) {

    return (
        <div className="tile" >
            <div className="mask">
                { images.map((image: any, i: any) => {
                    return (
                        <img src={require(`assets/images/${image.src}`)} alt={image.name} key={i}/>
                    )
                })} 
            </div>
        </div>
    )
}
