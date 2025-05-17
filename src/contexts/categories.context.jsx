import {  useEffect, useState } from "react";
import  ProductContext  from "./categories.create.context.jsx";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
import SHOP_DATA from "../shop-data.js";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.js";



export const CatergoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };
  
    //Passing products, to the DB, only do this once. If we need to pass a whole new Object
    //To our DB then we can use the Objects for our front end. This is not the recommended way to do this.
    //As the front end is usually not updating the DB, in this case the FIREBASE DB.
    //Import useEffect if you want tot use this again. 
    // useEffect(() => {
    //     addCollectionAndDocuments(
    //         'categories',
    //         SHOP_DATA
    //     );
    // }
    // , []);

    useEffect(() => { 
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);

        };
        getCategoriesMap();
    }
    , []);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

