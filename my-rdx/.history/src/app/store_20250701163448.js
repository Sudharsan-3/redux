import { configureStore } from "@reduxjs/toolkit"; 
import {coun} from "./features/counter/sliceCounter"
 
export const store = configureStore({
    reducer : {
        counter:counterReducer
    },
})