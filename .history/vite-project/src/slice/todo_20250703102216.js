import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const todo =  createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItems(state,action){
            return state.push(action.payload)
        }
    }
})


 {add}=todo.actions

export default todo.reducer