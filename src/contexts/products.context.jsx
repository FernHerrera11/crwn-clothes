import { useState } from "react";
import  ProductContext  from "./products.create.context";

import PRODUCTS from "../shop-data.json";



export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products, setProducts };
  
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

