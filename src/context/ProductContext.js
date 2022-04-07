import { createContext,useState } from "react";
import data from '../shop-data.json';

export const ProductsContext = createContext({
    products:[],
    setProducts:()=>{},
});


export const ProductProvider =({children})=>{
    const [products,setProducts] =useState(data);
    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}

