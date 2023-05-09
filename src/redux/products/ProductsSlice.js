import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../data/Products';

export const ProductsSlice = createSlice({
    name: 'products',
    initialState: Products,
    reducers:{
        productsReducer (state, action) {
            switch (action.type) {
                default:
                    return state;
            }
        }
    }
});

export default ProductsSlice.reducer;