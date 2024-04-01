import React, { useState } from 'react'
import images from '../images';
import '../App.css';

export const Slideshow = () => {
    const [index,setIndex] = useState(0);

    function nextStep() {
        if (index !== images.length -1) {
            setIndex(index+1)
            return
        }
        setIndex(0)
    }

    function prevStep() {
        if (index !== 0) {
            setIndex(index-1)
            return
        }
        setIndex(images.length -1)
    }

    return (
        <div className='container'>
            <div className='slideshow'>
                <img src={images[index]} className='slides'></img>
                <button className='prevButton' onClick={prevStep}>◀</button>
                <button className='nextButton' onClick={nextStep}>▶</button>
            </div>
        </div>
    )
}
