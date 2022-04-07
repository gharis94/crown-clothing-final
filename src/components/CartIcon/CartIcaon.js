import React from 'react';
import {ReactComponent as ShopIcon} from '../../asset/shopping-bag.svg';
import './CartIcon.scss';

const CartIcaon = () => {
  return (
    <div className = 'cart-icon-container' >
        <ShopIcon className='shopping-icon'/>
        <span className='item-count'>10</span>
    </div>
  )
}

export default CartIcaon