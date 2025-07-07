import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const todo =  createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItems(state,action){
             state.push(action.payload)
        },
        completed(state,action){
            const id = action.payload
            const complete = state.find((e) =)
        },
        deleteTodo(state,action){
            const id = action.payload
          return  state.filter((v)=> v.id !== id)
        }
    }
})


export const{addItems,completed,deleteTodo}=todo.actions

export default todo.reducer