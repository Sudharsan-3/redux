import { createSlice } from "@reduxjs/toolkit";



export const counter = createSlice({
    name:'counter',
    initialState :0,
    reducers:{
        increment:(state,action)=>{
             state+=1

        },
        decrement:(state,action)=>{
             state-=1

        },
    }
})

export const{increment,decrement} = counter.actions
export default counter.reducer
