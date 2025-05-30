import { useContext, Fragment} from 'react';
import CategoriesContext from '../../contexts/categories.create.context';
import ProductCard from '../../components/product-card/product-card.component';
// import './categories-preview.styles.scss';
import CategoryPreview from '../../components/caterogy-preview/category-preview.component';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);



    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return (
                        <CategoryPreview key={title} title={title} products={products} />
                    )

                })}

            
        </Fragment>
        
    )


}

export default CategoriesPreview;