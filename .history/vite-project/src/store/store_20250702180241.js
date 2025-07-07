import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slice/coustomerSclie"
import { counter } from "../slice/counter"
export const store = configureStore({
    devTools:true,
    reducer:{
        custormers : customerReducer,
        counter:counter
    }
})