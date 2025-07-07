import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const custormerSlice = createSlice({
    name:'customer',
    // initialState : (value=[])
    initialState,
    reducers:{
       addCustomer(state,action){
        state.push(action.payload)

       } ,
       deletCustomer(state,action){
        const deleteIndex = state.payload
        return state.filter

       }
    }
})

export const {addCustomer} = custormerSlice.actions
export default custormerSlice.reducer