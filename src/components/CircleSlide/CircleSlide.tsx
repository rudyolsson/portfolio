import React, { HTMLAttributes } from 'react'
import './CircleSlide.scss';
import { TechIcon } from 'components/types';

interface Props extends HTMLAttributes<HTMLElement> { 
    images: TechIcon[]
 }

export default function CircleSlide({ images }: Props ): JSX.Element {

    return (
        <div className="tile" >
                { images.map((image: TechIcon, i: any) => {
                    return (
                        <img src={require(`assets/images/${image.src}`)} alt={image.name} key={i}/>
                    )
                })} 
        </div>
    )
}
