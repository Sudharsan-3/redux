import { configureStore } from "@reduxjs/toolkit"; 
import {counterReducer} from "./features/counter/sliceCounter.js"
 
export const store = configureStore({
    reducer : {
        counter:counterReducer
    },
})