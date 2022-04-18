import React,{useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoriesContext } from '../../context/CategoriesContext';
import './CategoryPage.scss';

const CategoryPage = () => {
    const {category} = useParams();
    
    const {categoriesMap}=useContext(CategoriesContext);
    
    const [products,setProducts]=useState(categoriesMap[category]);

    useEffect(()=>{
        
        setProducts(categoriesMap[category])
    },[category,categoriesMap]);

  return (
    <React.Fragment>
        <h2>{category.toUpperCase()}</h2>
        <div className='category-page-container'>
            {
                products && products.map(product=>(
                        <ProductCard product={product} key={product.id}/>
                    ))
            }
        </div>
        
    </React.Fragment>
  )
}

export default CategoryPage;