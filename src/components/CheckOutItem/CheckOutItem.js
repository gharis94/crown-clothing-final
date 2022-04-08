import React, { useContext, } from 'react';
import { CartContext } from '../../context/CartContext';
import './CheckOutItem.scss';

const CheckOutItem = ({item}) => {
    const {name,quantity,price,imageUrl} = item;
    const {removeCartItem,addToCartItem,deleteCartItem} = useContext(CartContext);
    const Descrete=(product)=>removeCartItem(product);
    const Addition =(product)=>addToCartItem(product);
    const removeItem=(product)=>deleteCartItem(product);
  return (
    <div className='checkout-item-container'>
        <div className = 'image-container' >
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>
            {name}
        </span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>Descrete(item)} >&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className = 'arrow'  onClick={()=>Addition(item)}> &#10095;</div>
        </span>
        <span className='price'>
            ${price}
        </span>
        <span></span>
        <div className='remove-button' onClick={()=>removeItem(item)}>
            &#10005;
        </div>
    </div>
  )
}

export default CheckOutItem