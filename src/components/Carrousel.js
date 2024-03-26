import '../App.css';
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion";
import images from '../images';

export const Carrousel = () => {
    
    const [width,setWidth] = useState(0);
    const carrousel = useRef();

    useEffect(()=>{
        setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth)
    },[])

    return (
        <motion.div ref={carrousel} className='carrousel' whileTap={{cursor:"grabbing"}}>
            <motion.div 
            drag="x" 
            dragConstraints={{right:0, left:-width}}
            className='inner-carrousel'
            >
            {images.map(image => {
                return(
                    <motion.div className='item' key={image}>
                        <img src={image} alt=''/>
                    </motion.div>
                )
            })}
            </motion.div>
        </motion.div>
    )
}
