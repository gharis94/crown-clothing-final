import { createContext, useEffect, useState,useReducer } from "react";

//Reducer function
export const cartReducer = (state,action)=>{
    const {type,payload}= action;
    switch(type){
        case "ADDITION_TO_LIST":
            return{
                ...state,

                quantity: state.quantity+1
            }
        case "REMOVE_FROM_QUANTITY":
            state.quantity?(
            {
                ...state,
                quantity:state.quantity
            }):{
                ...state,

            }
    }
}

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
const initialState={    
    isToggle:false,
    CartItems:[],
    Count:0,
    Total:0,    
}

export const CartContext=createContext(initialState);



export const CartProvider=({children})=>{
    const [isToggle,setisToggle]=useState(false);
    const [CartItems,setCartItems]=useState([]);
    const [Count,setCount]=useState(0);
    const [Total,setTotal]=useState(0);
    const [state,dispatch]=useReducer(cartReducer,initialState);
    
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