import React from 'react';
import './ProductCard.scss';


const ProductCard = ({product}) => {
    const {name,price,imageUrl} =product;
  return (
    <div  className = 'product-card-container' >
        <img src={imageUrl} />
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <button className='button'>Add</button>
    </div>
  )
}

export default ProductCard;