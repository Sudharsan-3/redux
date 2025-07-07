import { configureStore } from "@reduxjs/toolkit"; 
import counterReducer from "../app/features/counter/sliceCounter"
 
export const store = configureStore({
    reducer : {},
})