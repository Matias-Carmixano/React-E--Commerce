import { createSlice } from '@reduxjs/toolkit';


export const UsersSlice = createSlice({
    
    name: 'user',
    initialState: {
        currentUser: null,
    },

    reducers:{
        userReducer : (state, action) => {
            if (action.payload != null) {
            state.currentUser = action.payload
            };
        }
    }
});

export default UsersSlice.reducer;