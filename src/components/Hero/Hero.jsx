import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png';
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter'

const Hero = () => {
  const transition = {type: 'spring', duration: 2};
  const mobile = window.innerWidth <=768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
        <div className="left-hero">
          <Header />
          <div className="best-tagline">
            <motion.div
            initial={{left: mobile ? '106px' : '150px'}}
            whileInView={{left: '6px'}}
            transition={{...transition, type: 'tween'}}
            ></motion.div>
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
            <div><span><NumberCounter end={140} start={40} delay='2' preFix='+' /></span><span>expert coaches</span></div>
            <div><span><NumberCounter end={600} start={400} delay='2' preFix='+' /></span><span>joined members</span></div>
            <div><span><NumberCounter end={50} start={0} delay='2' preFix='+' /></span><span>fitness programs</span></div>
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
          <motion.div 
          initial={{ right: '-1rem'}}
          whileInView={{ right: '4rem'}}
          transition={transition}
          className="heart-rate">
            <img src={Heart} alt='' />
            <span>Heart Rate</span>
            <span>146 bpm</span>
          </motion.div>
          <img src={hero_image} alt='' className='hero-image' />
          <motion.img 
          initial={{ right: '11rem'}}
          whileInView={{ right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt='' className='hero-image-back' />
          <motion.div
          initial={{ right: '37rem'}}
          whileInView={{ right: '28rem'}}
          transition={{...transition, type: 'tween'}}
          className="calories">
            <img src={Calories} alt='' />
            <div>
              <span>Calories Burned</span>
              <pan>340 kcal</pan>
            </div>
          </motion.div>
          
        </div>
    </div>
  )
}

export default Hero