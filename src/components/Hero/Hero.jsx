import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';


const Hero = () => {
  return (
    <div className="hero">
        <div className="left-hero">
          <Header />
          <div className="best-tagline">
            <div></div>
            <span>Buea's best fitness Club</span>
          </div>
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div><span>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the</span></div>
          </div>
          <div className="figures">
            <div><span>+120</span><span>export coaches</span></div>
            <div><span>+600</span><span>members joined</span></div>
            <div><span>+50</span><span>fitness programs</span></div>
          </div> 
          <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
          </div>
        </div>
        <div className="right-hero">
          <button className='btn'>
            Join Now
          </button>
          <div className="heart-rate">
            <img src={Heart} alt='' />
            <span>Heart Rate</span>
            <span>146 bpm</span>
          </div>
          <img src={hero_image} alt='' className='hero-image' />
          <img src={hero_image_back} alt='' className='hero-image-back' />
          <div className="calories">
            <img src={Calories} alt='' />
            <div>
              <span>Calories Burned</span>
              <pan>340 kcal</pan>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Hero