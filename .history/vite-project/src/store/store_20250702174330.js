import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slice/coustomerSclie"
export const store = configureStore({
    devTools:false,
    reducer:{
        custormers : customerReducer
    }
})