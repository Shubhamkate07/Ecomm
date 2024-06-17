import React from 'react'
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import ins from '../Assets/instagram_icon.png';
import pins from '../Assets/pintester_icon.png';
import whats from '../Assets/whatsapp_icon.png';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import '../RelatedProducts/RelatedProducts.css';
const Footer = ({type}) => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>


    <ul className="footer-links">
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact</li>


    </ul>


    <div className="footer-social-icon">
        <div className="footer-icons-container">
            


<a href="https://www.instagram.com/shubhamk___0962"  target="_blank"><img src={ins} alt="" /></a>

        </div>

        <div className="footer-icons-container">
            <a href=""><img src={pins} alt="" /></a>
        </div>

        <div className="footer-icons-container">
           

<a href="https://wa.me/7249039080"> <img src={whats} alt="" /></a>

        </div>
    </div>


<div className="footer-copyright">
    <hr />
    <p>Copyright @2024 - All Right Reserved | SHUBHAM KATE | 7249039080 | shubhamkate962@gmail.com</p>
</div>
    </div>
  )
}

export default Footer
