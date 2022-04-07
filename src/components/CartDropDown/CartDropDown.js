import React from 'react'
import './CartDropDown.scss';

const CartDropDown = () => {
  return (
    <div className = 'cart-dropdown-container' >
        <div className='cart-items'/>
        <button className='button'>Check Out</button>
    </div>
  )
}

export default CartDropDown