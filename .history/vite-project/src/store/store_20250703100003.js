import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slice/coustomerSclie"
import { counterReducer } from "../slice/counter"
export const store = configureStore({
    devTools:true,
    reducer:{
        custormers : customerReducer,
        counter
    }
})