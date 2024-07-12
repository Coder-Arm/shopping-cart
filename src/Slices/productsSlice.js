import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        manageProducts : (state,action) => {
            return action.payload
        } 
    }
})

export const {manageProducts}  = productsSlice.actions;
export default productsSlice.reducer;