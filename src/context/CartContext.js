import { createContext, useState } from "react";


export const CartContext=createContext({
    isToggle:false,
    setisToggle:()=>{},
    CartItems:[],
    setCartItems:()=>{}
});

export const CartProvider=({children})=>{
    const [isToggle,setisToggle]=useState(false);
    const [CartItems,setCartItems]=useState([]);

    const additem=(product)=>{
        console.log(product)
    }
    return(
        <CartContext.Provider value={{isToggle,setisToggle,additem }}>
            {children}
        </CartContext.Provider>
    )
}