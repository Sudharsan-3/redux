import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slice/coustomerSclie"
export const store = configureStore({
    devTools:true,
    reducer:{
        custormers : customerReducer,
        counter
    }
})