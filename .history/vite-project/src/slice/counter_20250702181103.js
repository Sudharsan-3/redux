import { createSlice } from "@reduxjs/toolkit";

initialState = (0)

export const counter = createSlice({
    name:'counter',
    initialState ,
    reducers:{
        increment(state,action){
            return state+=1

        },
        decrement(state,action){
            return state-=1

        },
    }
})

export const{increment,decrement} = counter.actions
export default counter.reducer
