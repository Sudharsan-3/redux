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
        const deleteIndex = act.payload
        return state.filter((value,index)=> index !== deleteIndex)

       }
    }
})

export const {addCustomer ,deletCustomer} = custormerSlice.actions
export default custormerSlice.reducer