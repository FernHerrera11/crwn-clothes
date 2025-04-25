import { createContext } from 'react';




 const ProductContext = createContext({
    products: [],
    setProducts: () => null,
});

export default ProductContext;