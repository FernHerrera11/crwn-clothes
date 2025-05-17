import { createContext } from 'react';




 const CategoriesContext = createContext({
    catergoriesMap: [],
    setProducts: () => null,
});

export default CategoriesContext;