import React from 'react'
import './CategoryItem.scss';
import { useNavigate } from 'react-router-dom';
const CategoryItem = ({title,imageUrl}) => {
  const navigate=useNavigate();
  const navigateTo=({title})=>{
    
    navigate(`shop/${title}`);
  }
  return (
    <div className = 'category-container' >
      <div className = 'background-image'
      style = {{
          backgroundImage:`url(${imageUrl})`,
        }} />
        <div onClick = {() => navigateTo({title})}
        className = 'category-body-container' >
          <h2>{title.toUpperCase()}</h2>
          <p>SHOP NOW</p>
        </div>
      
    </div>
  )
}

export default CategoryItem;