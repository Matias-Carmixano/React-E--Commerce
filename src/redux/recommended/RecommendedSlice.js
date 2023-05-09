import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../data/Products';
//import { Recomended } from '../../data/Recomended';


const NewPro = [...Products]

const shuffle = (Array) => {
    for(let i = Array.length-1; i > 0; i--){
        const Random = Math.floor(Math.random() * (i+2))
        const Temporal = Array[i]
        Array[i] = Array[Random]
        Array[Random] = Temporal
    }
    return Array
};

let ShuffleProducts = shuffle(NewPro)

export const RecommendedSlice = createSlice({
    
    name: 'recommended',
    initialState: ShuffleProducts,

    reducers:{
        recommendedReducer (state, action) {
            switch (action.type) {
                default:
                    return state;
            }
        }
    }
});

export default RecommendedSlice.reducer;