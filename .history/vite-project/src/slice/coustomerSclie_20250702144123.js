import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const custormerSlice = createSlice({
    name:'customer',
    // initialState : (value=[])
    initialState,
    reducers:{
       addCustomer(state){
        state.push(action.payload)

       } 
    }
})

export const {addCustomer} = custormerSlice.actions
 custormerSlice.reducer