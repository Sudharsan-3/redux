import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const   createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItems(state,action){
            return state.push(action.payload)
        }
    }
})
