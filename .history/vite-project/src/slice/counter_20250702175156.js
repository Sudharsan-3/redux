import { createSlice } from "@reduxjs/toolkit";

initialState = 0

const countercreateSlice({
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