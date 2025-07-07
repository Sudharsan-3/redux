import { createSlice } from "@reduxjs/toolkit";

export counterSlice =  createSlice({
    name :'counter',
    initialState : {value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            state.value -= 1;
        }
    }
})