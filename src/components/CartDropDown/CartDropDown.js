import React,{useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import './CartDropDown.scss';
import Cartitem from '../CartItem/Cartitem';
import { useNavigate } from 'react-router-dom';

const CartDropDown = () => {
    const {CartItems} = useContext(CartContext);
    const navigate=useNavigate();
    const navigateTo=()=>{
        navigate('checkout')
    }  
  return (
    <div className = 'cart-dropdown-container' >
        <div className='cart-items'>
            {
                CartItems.map(item=>(
                    <Cartitem key={item.id} item={item} />
                ))
            }
        </div>
        <button  className='button' onClick={()=>navigateTo()}>check Out</button>
        
    </div>
  )
}

export default CartDropDown;