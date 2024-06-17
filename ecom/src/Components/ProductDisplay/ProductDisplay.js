import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {



    const {product}= props;

const {addTocart}=useContext(ShopContext);
const {removeFromcart}=useContext(ShopContext);

  return (
    <div className='productdisplay'>

      
<div className="productdisplay-left">

<div className="productdisplay-img-list">
   <div className='L'>
   <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
   </div>
</div>

<div className="productdisplay-img">
<img  className='productdisplay-main-img' src={product.image} alt="" />
</div>

</div>


<div className="productdisplay-right">
   <h1>{product.name}</h1>

   <div className="productdisplay-right-star">
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_icon} alt="" />
    <img src={star_dull_icon} alt="" />
    <p>(122)</p>
   </div>


<div className="productdisplay-right-prices">

 <div className='p'>
 <div className="productdisplay-right-price-old">
${product.old_price}
    </div>

    <div className="productdisplay-right-price-new">
    ${product.new_price}
        </div>
 </div>



        <div className="productdisplay-right-description">
        "Explore our latest collection of trendy and comfortable clothing for all seasons.Find your perfect style with our wide range of fashionable apparel for men, women, and kids.
        </div>


        <div className="productdisplay-right-size">
            <h1>Select Size</h1>

            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>

            <button onClick={()=>{addTocart(product.id)}}> ADD TO CART</button>

            <p className='productdisplay-right-category'>
                <span>Category:</span>Women, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags:</span>Modern, Latest
            </p>
        </div>

</div>


</div>

    </div>
  )
}

export default ProductDisplay;
