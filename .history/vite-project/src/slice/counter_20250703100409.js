import { createSlice } from "@reduxjs/toolkit";

initialState :0 

export const counter = createSlice({
    name:'counter',
    initialState :{value: 0 },
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
