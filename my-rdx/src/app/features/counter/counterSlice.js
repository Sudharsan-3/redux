import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =  createSlice({
    name :'counter',
    initialState : {value:0},
    reducers:{
        increment:(state,action)=>{
            state.value = action.payload;
            // state.value+=1;
        },
        decrement:(state,action)=>{
            // state.value-=1;
            state.value = action.payload;
        },
    },
})
// updateSavedFilter: (state, action) => {
//     state.savedFilter = action.payload;
//   },

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;

