import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import './ProductCard.scss';


const ProductCard = ({product}) => {
    const {name,price,imageUrl} =product;
    const {addItem} = useContext(CartContext);
  return (
    <div  className = 'product-card-container' >
        <img src={imageUrl} alt={name} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
        <button onClick={()=>addItem(product)} className='button'>Add</button>
    </div>
  )
}

export default ProductCard;