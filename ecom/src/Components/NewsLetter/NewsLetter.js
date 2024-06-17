import React from 'react'
import './NewsLetter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>


      <div className='abc'>
        <input type="email" placeholder='Your Email id'  className='emi'/>
        <button className='btn'>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
