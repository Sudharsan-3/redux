import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const todo =  createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItems(state,action){
             state.push(action.payload)
        }
        completed(state,action){
            const index = action.payload
            state.map((v,i) => v.id)
        }
    }
})


export const{addItems}=todo.actions

export default todo.reducer