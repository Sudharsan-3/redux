import { createSlice } from "@reduxjs/toolkit";

initialState = 

export const counter = createSlice({
    name:'counter',
    initialState ,
    reducers:{
        increment:(state,action)=>{
             state.value+=1

        },
        decrement:(state,action)=>{
             state.value-=1

        },
    }
})

export const{increment,decrement} = counter.actions
export default counter.reducer
