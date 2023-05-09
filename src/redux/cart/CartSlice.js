import { createSlice } from '@reduxjs/toolkit';


const items = localStorage.getItem('cartItems') != null ? JSON.parse
(localStorage.getItem('cartItems')) : [] ;

export const CartSlice = createSlice({
    name: 'cart',
    initialState :{
        cartItems: items ,
        shippingCost: 500,
        CartHidden: false,
        BurgerHidden: false,
        ExitHidden: false,
    }, 
    
    

    reducers: {
        /*--------------AGREGAR PRODUCTO------------*/
        AddCardProduct: (state, action) => {
            const newItem = action.payload
            const itemCheck = state.cartItems.find(item => item.id === newItem.id )

           if(!itemCheck){
            state.cartItems.push({
                id: newItem.id,
                title: newItem.title,
                price: newItem.price,
                img: newItem.img,
                key: newItem.key,
                quantity: 1,
            })
           }else{
                itemCheck.quantity++
           }
           localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(
            item=>item)))
        },
          /*--------------REMOVER PRODUCTO------------*/
        RemoveProduct: (state, action) => {
            const NewItem = action.payload;
            const ItemToRemove = state.cartItems.find(item => item.id === NewItem.id);
            
            if(ItemToRemove){
                state.cartItems = state.cartItems.filter(items => items.id !== ItemToRemove.id);
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            }else{
                return
            };
        },
        ClearCart: (state, action) =>{
            
            if (action.payload === true) {
                localStorage.removeItem('cartItems');
                state.cartItems = [];
            }else{
                return
            }
            
        },
          /*--------------ABRIR/CERRAR CARRITO------------*/
        ToggleCart: (state, action)=>{
            if (state.CartHidden === false) {
                state.CartHidden = action.payload
                state.BurgerHidden = false
            }else{
                state.CartHidden = false
            }
        },
        ToggleBurger: (state, action)=>{
            if (state.BurgerHidden === false) {
                state.BurgerHidden = action.payload
            }else{
                state.BurgerHidden = false
            }
        },
        ToggleExit: (state, action)=>{
            if (state.ExitHidden === false) {
                state.ExitHidden = action.payload
            }else{
                state.ExitHidden = false
            }
        },

          /*--------------MODIFICAR CANTIDAD +------------*/
        ButtonPlusF: (state, action) =>{
            const newItem = action.payload
            const itemCheck = state.cartItems.find(item => item.id === newItem.id )

           if(itemCheck.quantity >= 1){
            itemCheck.quantity++;
           }
           localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(
            item=>item)))

        },
          /*--------------RESTAR CANTIDAD -------------*/
        ButtonLessF: (state,action) =>{
            const newItem = action.payload
            const itemCheck = state.cartItems.find(item => item.id === newItem.id )

           if(itemCheck.quantity === 1){
            state.cartItems = state.cartItems.filter((item) => item.id =! itemCheck.id);
           } else{
                itemCheck.quantity--
           }
           localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(
            item=>item)))
        },

    }}, 

);

export const { ToggleCart, RemoveProduct, ButtonLessF, ButtonPlusF, AddCardProduct, ClearCart, ToggleBurger,ToggleExit, DisableButton } = CartSlice.actions;
export default CartSlice.reducer;