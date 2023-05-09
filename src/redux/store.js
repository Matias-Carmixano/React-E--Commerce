import { configureStore } from "@reduxjs/toolkit";
//reducers
import categories  from './categories/CategoriesSlice';
import products from './products/ProductsSlice';
import recommended from './recommended/RecommendedSlice';
import cart from './cart/CartSlice';
import user from './user/UsersSlice'


export const store = configureStore({
    reducer: {
        categories,
        products,
        recommended,
        cart,
        user,
    }
});