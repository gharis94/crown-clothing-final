import React,{useContext} from 'react'
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../context/CategoriesContext';
import './PreviewCategoryPage.scss';

const PreviewCategoryPage = () => {
    const {categoriesMap}=useContext(CategoriesContext);
  return (
    <div>
        {
            Object.keys(categoriesMap).map(title=>{
                const products = categoriesMap[title];
                return(
                    <CategoryPreview products={products} key={title} title={title}/>
                )
            })
        }
    </div>
  )
}

export default PreviewCategoryPage