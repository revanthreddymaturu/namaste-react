import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartItems:[],
    },
    reducers:{
        addCartItem:(state,action)=>{
            state.cartItems.push(action.payload);
        },
        removeCartItem:(state,action)=>{
            state.cartItems.pop();
        },
        clearCart:(state,action)=>{
            state.cartItems.length=0;
        }
    }
})
export default cartSlice.reducer;
export const {addCartItem,removeCartItem,clearCart}=cartSlice.actions;