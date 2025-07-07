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
            state.map((v) => v.id === id?([...v,v.completed = true]):v)
        },
        deleteTodo(state,action){
            const id = action.payload
          return  state.filter((v)=> v.id !=== id)
        }
    }
})


export const{addItems,completed,deleteTodo}=todo.actions

export default todo.reducer