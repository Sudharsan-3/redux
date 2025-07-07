import { configureStore } from "@reduxjs/toolkit"; 
import counter from "./features/counter/sliceCounter.js"
 
export const store = configureStore({
    reducer : {
        counter:counterReducer
    },
})