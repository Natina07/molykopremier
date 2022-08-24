import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Join.css';

const Join = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gf3x5wh', 'template_3vc4wwj', form.current, 'x2Vxtje8YhKebd8FE')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join">
        <div className="left-join">
            <hr/>
            <div>
                <span className='stroke-text'>Ready to </span>
                <span>level up</span>
            </div>
            <div>
                <span>Your body </span>
                <span className='stroke-text'>with us?</span>
            </div>
        </div>
        <div className="right-join">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type='email' name='user_email' placeholder='Enter your email address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join