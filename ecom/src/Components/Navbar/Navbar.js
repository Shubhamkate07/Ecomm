import React, { useContext, useState,useRef } from 'react'
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {Link} from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import drop from '../Assets/dropdown_icon.png'


const Navbar = () => {

const [menu,setmenu]=useState('');

const {noitem}=useContext(ShopContext);



const menuRef= useRef();


const dropdown_toggle=(e)=>{
menuRef.current.classList.toggle('nav-menu-visible');
e.target.classList.toggle('open');
}

  return( 
    <div  className='navbar'>
     
      <div className='nav-logo'>
<img src={logo} alt="logo" className='log' />
<p>SHOPPER</p>
      </div>


<ul className='nav-menu'  ref={menuRef}>

{/* <img src={drop} alt=""  onClick={dropdown_toggle}  className='nav_dropdown'/> */}

<li  onClick={()=>{setmenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>  {menu==='shop' ? <hr/> : <></>}</li>

<li  onClick={()=>{setmenu("mens")}} ><Link to='/mens'  style={{textDecoration:'none'}}>Men</Link>  {menu==='mens' ? <hr/> : <></> }</li>
<li onClick={()=>{setmenu("womens")}}  ><Link to='/womens' style={{textDecoration:'none'}}>Women</Link>  {menu==='womens' ? <hr/> : <></> }</li>
<li onClick={()=>{setmenu("kids")}}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>  {menu==='kids' ? <hr/> : <></> }</li>
</ul>


<div className='nav-login-cart'>
<Link to='/login' className='logi'><button>Login</button></Link>
<Link to='/cart'><img src={cart_icon} alt="C" /></Link>
<div className='nav-cart-count'> {noitem}</div>
</div>

    </div>
  )
}

export default Navbar
