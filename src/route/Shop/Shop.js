import React from 'react'
import { Routes,Route } from 'react-router-dom';
import CategoryPage from '../CategoryPage/CategoryPage';
import PreviewCategoryPage from '../PreviewCategoryPage/PreviewCategoryPage';
import './Shop.scss';

const Shop = () => {
  return (

    <div className='categories-container'>
      <Routes>
        <Route index element={<PreviewCategoryPage/>} />
        <Route path=":category" element={<CategoryPage/>}/>
      </Routes>

    </div>
    
  )
}

export default Shop