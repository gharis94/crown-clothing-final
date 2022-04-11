import React,{useContext} from 'react'
//import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../context/CategoriesContext';
import './Shop.scss';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';

const Shop = () => {
  const {categoriesMap} =useContext(CategoriesContext)
  return (

    <div className='categories-container'>
      {
        Object.keys(categoriesMap).map(title=>{
          const products = categoriesMap[title];
          console.log('a',products)
          return(
            <CategoryPreview products={products} key={title} title={title}/>
          )
          
        })
      }

    </div>
    
  )
}

export default Shop