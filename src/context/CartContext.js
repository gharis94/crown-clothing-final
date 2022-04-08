import { createContext, useEffect, useState } from "react";

const Additiontolist=(cartitems,products)=>{
    const itemExist = cartitems.find(item=>item.id === products.id);    
    if(itemExist){
        return cartitems.map(item=>item.id===products.id?{...item,quantity:item.quantity+1}:item);
    }
    return[...cartitems,{...products,quantity:1,}]
};

const removeFromQauntity=(cartitem,product)=>{
    const existItem = cartitem.find(item=>item.id === product.id)
    if(existItem.quantity === 1){
        const newarr =cartitem.filter(item => item.id !== product.id)
        return newarr;
    }
      return cartitem.map(item=>item.id === product.id?{...item,quantity:item.quantity-1}:item)
};
const addto =(cartitems,product)=>{
    return cartitems.map(item=>item.id===product.id?{...item,quantity:item.quantity + 1}:item);

};
const del=(cartitems,product)=>{
    return cartitems.filter(item=>item.id !== product.id);
};

export const CartContext=createContext({
    isToggle:false,
    setisToggle:()=>{},
    CartItems:[],
    setCartItems:()=>{},
    Count:0,
    addToCartItem:()=>{},
    removeCartItem:()=>{},
    deleteCartItem:()=>{},
    Total:0,
    
});



export const CartProvider=({children})=>{
    const [isToggle,setisToggle]=useState(false);
    const [CartItems,setCartItems]=useState([]);
    const [Count,setCount]=useState(0);
    const [Total,setTotal]=useState(0);
    
    const addItem =(products)=>{
        setCartItems(Additiontolist(CartItems,products))
    }
    useEffect(()=>{
        const newCount = CartItems.reduce((total, cartitem) => total + cartitem.quantity,0)
        setCount(newCount)
    },[CartItems]);
    useEffect(()=>{
        const newTotal = CartItems.reduce((total,cartitem)=>{
            const x=cartitem.quantity*cartitem.price;
            total +=x;
            return total;
        },0)
        setTotal(newTotal)
    },[CartItems])

    const removeCartItem=(product)=>{
        setCartItems(removeFromQauntity(CartItems,product))
    };

    const addToCartItem=(product)=>{
        setCartItems(addto(CartItems,product));
    };
    const deleteCartItem=(product)=>{
        setCartItems(del(CartItems,product));
    };
    
    return(
        <CartContext.Provider value={{isToggle,setisToggle,CartItems,addItem,Count,removeCartItem,addToCartItem,deleteCartItem,Total }}>
            {children}
        </CartContext.Provider>
    )
}