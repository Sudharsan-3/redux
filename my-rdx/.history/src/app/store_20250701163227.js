import { configureStore } from "@reduxjs/toolkit"; 
import counterSlice from "./features/counter/sliceCounter.js"
 
export const store = configureStore({
    reducer : {
        counter:counterReducer
    },
})