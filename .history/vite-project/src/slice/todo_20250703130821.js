import { createSlice } from "@reduxjs/toolkit";
const initialState = []

const todo =  createSlice({
    name:"todo",
    initialState,
    reducers:{
        addItems(state,action){
             state.push(action.payload)
        },
        completed(state, action) {
            const id = action.payload;
            const todoItem = state.find((v) => v.id === id);
            if (todoItem) {
              todoItem.completed = true; // ✅ Immer lets you mutate
            }
          },
      
        deleteTodo(state,action){
            const id = action.payload
          return  state.filter((v)=> v.id !== id)
        }
    }
})


export const{addItems,completed,deleteTodo}=todo.actions

export default todo.reducer