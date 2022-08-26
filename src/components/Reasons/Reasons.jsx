import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
        <div className="left-reasons">
            <img src={image1} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
            <img src={image4} alt='' />
        </div>
        <div className="right-reasons">
            <span>The Molyko Premier Advantage</span>
            <div>
                <span className='stroke-text'>Why </span>
                <span>Choose Us?</span>
            </div>
            <div className='right-reasons-details'>
                <div><img src={tick} alt='' /><span>Top fitness classes led by expert instructors</span></div>
                <div><img src={tick} alt='' /><span>Get all your sports gear at low cost</span></div>
                <div><img src={tick} alt='' /><span>Live healthy with our fitness App</span></div>
                <div><img src={tick} alt='' /><span>Passionate and Supportive Community</span></div>
            </div>
            <span 
            style={{
                color: 'var(--gray)',
                fontWeight: 'normal'
            }}
            >Our Partners</span>
            <div className="partners">
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Reasons