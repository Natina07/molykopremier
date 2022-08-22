import React, { useState } from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'

const Testimonials = () => {
    const  [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;

  return (
    <div className='testimonials'>
        <div className="left-testim">
            <span>Testimonials</span>
            <span className='stroke-text'>What they</span>
            <span>Say About Us</span>
            <span>
                {testimonialsData[selected].review}
            </span>
            <span>
                <span style={{ color: 'var(--orange)'}}>
                    {testimonialsData[selected].name}
                </span>{' '}
                - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-testim">
            <div></div>
            <div></div>
            <img src={testimonialsData[selected].image} alt='' />
            <div className="arrows">
                <img src={leftArrow} alt='' />
                <img src={rightArrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Testimonials