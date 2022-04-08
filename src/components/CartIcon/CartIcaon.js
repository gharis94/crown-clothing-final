import React, { useContext } from 'react';
import {ReactComponent as ShopIcon} from '../../asset/shopping-bag.svg';
import { CartContext } from '../../context/CartContext';
import './CartIcon.scss';

const CartIcaon = () => {
    const {Count} = useContext(CartContext);
  return (
    <div className = 'cart-icon-container' >
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>{Count}</span>
    </div>
  )
}

export default CartIcaon