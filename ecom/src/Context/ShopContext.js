import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext=createContext(null);


const getDefaultCart=()=>{
    let cart={};

    for (let index = 0; index < all_product.length+1; index++) {
      cart[index]=0;
    }

    return cart;
}

const ShopContextProvider=(props)=>{
    
    const [cartItem, setcartItem]= useState(getDefaultCart());
    
    const [noitem, setnoitem] =useState(0);

    const addTocart=(itemId)=>{
setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
console.log(cartItem);
setnoitem(noitem+1);
    }


    const removeFromcart=(itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        setnoitem(noitem-1);
            }


            const getTotalCartAmout=(itemId)=>{
let totalAmount=0;

for(const item in cartItem){
    if(cartItem[item]>0){
        let itemInfo=all_product.find((product)=>
            product.id==Number(item)
    )
        totalAmount+=itemInfo.new_price*cartItem[item]
    }

   
}

return totalAmount;
            }

            const contextValue={noitem, setnoitem, getTotalCartAmout,all_product, cartItem,addTocart,removeFromcart};
    
    return (
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>


    )
}

export default ShopContextProvider;