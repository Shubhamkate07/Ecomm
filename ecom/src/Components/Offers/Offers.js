import React from 'react'
import './Offers.css';
import Exe from '../Assets/exclusive_image.png';
const Offers = () => {
  return (
    <div className='offers'>
      
      <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
{/* <hr /> */}
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>


      <div className="offers-right">
        <img src={Exe} alt="" />
        </div>      
    </div>
  )
}

export default Offers
