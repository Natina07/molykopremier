import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/mp-logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <hr />
        <div className="footer">
            <div className="social-handles">
                <img src={Github} alt='' />
                <img src={Instagram} alt='' />
                <img src={LinkedIn} alt='' />
            </div>
            <div>
              <p>Site by <a className='credits' href='https://www.hallecraft.com' target='_blank' rel="noreferrer">Hallecraft</a></p>
            </div>
             <div className="logo">
                <img src={Logo} alt="" />
            </div>
        </div>
      <div className="blur footer-blur"></div>
    </div>
  )
}

export default Footer