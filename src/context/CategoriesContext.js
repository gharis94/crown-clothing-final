import { createContext,useEffect,useState } from "react";
//import SHOP_DATA from '../shop-data.js';
import {getCollectionAndDocuments} from '../utils/firebase/firebase';

export const CategoriesContext = createContext({
    categoriesMap:{},
    //setProducts:()=>{},
});


export const CategoriesProvider =({children})=>{
    const [categoriesMap, setcategoriesMap] = useState({});
    useEffect(()=>{
        const getCategories=async()=>{
            const categories = await getCollectionAndDocuments();
            console.log(categories)
            setcategoriesMap(categories);
        }
        getCategories()
    },[])
    return(
        <CategoriesContext.Provider  value = {{categoriesMap}}>
            {children}
        </CategoriesContext.Provider>
    )
}

