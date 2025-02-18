import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove from '../Assets/cart_cross_icon.png';
const CartItems = () => {

const {getTotalCartAmout,all_product,cartItem,removeFromcart}=useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e)=>{
    if(cartItem[e.id]>0){
        return <div>
      <div className='cartitems-format cartitems-format-main'>
<img src={e.image} alt=""  className='carticon-product-icon'/>
<p>{e.name}</p>
<p>${e.new_price}</p>
<button className='cartitems-quantity' >{cartItem[e.id]}</button>
<p>{e.new_price*cartItem[e.id]}</p>
<img src={remove} alt=""  className='cartitems-remove-icon' onClick={()=>{removeFromcart(e.id)}}/>
      </div>
      <hr />
      </div>
    }

    return null;
})}


<div className="cartitems-down">
    <div className="cartitems-total">
        <h1>Cart Total</h1>
<div>
    <div className="cartitems-total-item">
        <p>Subtotal</p>
        <p>${getTotalCartAmout()}</p>
    </div>
    <hr />
<div className="cartitems-total-item">
    <p>Shipping Fee</p>
    <p>Free</p>
</div>
<hr />

<div className="cartitems-total-item">
    <h3>Total</h3>
    <h3>${getTotalCartAmout()}</h3>
</div>

</div>

<button>PROCEED TO CHECKOUT</button>

    </div>


    <div className="crtitems-promocode">
        <p>If you have promo code , Enter it here</p>
<div className="cartitems-promobox">
    <input type="text" placeholder='Promocode' />
    <button>Submit</button>
</div>

    </div>
</div>
      

    </div>
  )
}

export default CartItems
