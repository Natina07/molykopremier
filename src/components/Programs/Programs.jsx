import React from 'react'
import './Programs.css';
import { programsData } from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
  return (
    <div className="programs" id="programs">
        <div className="program-header">
            <span className='stroke-text'>Explore</span>
            <span>our Fitness</span>
            <span className='stroke-text'>Programs</span>
        </div>
        <div className="programs-categories">
            {programsData.map((program) => (
                <div className="category">
                    {program.image}
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <div className="join-now">
                        <span>Join Now</span>
                        <img src={RightArrow} alt='Join now' />
                    </div>
                </div>
            ))}
           
        </div>
    </div>
  )
}

export default Programs