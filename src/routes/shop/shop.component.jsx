// import { useContext, Fragment} from 'react';
// import CategoriesContext from '../../contexts/categories.create.context';
// import ProductCard from '../../components/product-card/product-card.component';
// import CategoryPreview from '../../components/caterogy-preview/category-preview.component';
import {Routes, Route} from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
// import './shop.styles.scss';


const Shop = () => {




    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
            
        </Routes>
        
    )


}

export default Shop;