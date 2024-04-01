import React, { useState } from 'react'
import images from '../images';
import '../App.css';
import { AnimatePresence, motion } from 'framer-motion'

export const Slideshow = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0)

    const variants = {
        initial: direction => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
                // scale: 0.5,
            }
        },
        animate: {
            x: 0,
            opacity: 1,
            // scale: 1,
            // transition: 'ease-in',
            transition: {
                x: { type: 'spring', stiffness: 150, damping: 30 },
                opacity: { duration: 0.2 },
            },
        },
        exit: direction => {
            return {
                x: direction > 0 ? -1000 : 1000,
                opacity: 0,
                // scale: 0.5,
                // transition: 'ease-in',
                transition: {
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                },
            }
        },
    }

    function nextStep() {
        setDirection(1)
        if (index !== images.length - 1) {
            setIndex(index + 1)
            return
        }
        setIndex(0)
    }

    function prevStep() {
        setDirection(-1)
        if (index !== 0) {
            setIndex(index - 1)
            return
        }
        setIndex(images.length - 1)
    }

    return (
        <div className='container'>
            <div className='slideshow'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        src={images[index]}
                        alt='slides'
                        className='slides'
                        key={images[index]}
                        custom={direction}
                    />
                </AnimatePresence>
                <button className='prevButton' onClick={prevStep}>◀</button>
                <button className='nextButton' onClick={nextStep}>▶</button>
            </div>
        </div>
    )
}
