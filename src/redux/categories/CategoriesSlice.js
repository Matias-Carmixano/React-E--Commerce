import { createSlice } from '@reduxjs/toolkit';
import { Categoria } from '../../data/Categoria';




export const CategoriesSlice = createSlice({
    name: 'categories',
    initialState :{
        categorie: Categoria, 
        selectedCategory: null,
    }, 
    
    

    reducers: {
       selectCategory: (state, action) =>{
            if(state.selectedCategory !== action.payload){
            state.selectedCategory = action.payload             
        }else{
            state.selectedCategory = null
        }

        }
    }, 

});

export const { selectCategory } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;