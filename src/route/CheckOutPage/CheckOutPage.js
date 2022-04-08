import React,{useContext} from 'react'
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem';
import { CartContext } from '../../context/CartContext'
import './CheckOutPage.scss';
const CheckOutPage = () => {
  const {CartItems,Total} = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className = 'checkout-header'>
        <div  className = 'header-block' >
          Image
        </div>
        <div  className = 'header-block' >
          Description
        </div>
        <div className = 'header-block' >
          Quantity
        </div>
        <div  className = 'header-block' >
          Amount
        </div>
        <div  className = 'header-block' >
          Remove 
        </div>
      </div>
      
      <div>
        {
          CartItems.map(item=><CheckOutItem key={item.id} item={item}/>)
        }
      </div>
      <div className='total'>
        Total : $ {Total}
      </div>
    </div>
  )
}

export default CheckOutPage;