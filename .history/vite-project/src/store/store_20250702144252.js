import {configureStore} from "@reduxjs/toolkit"
import customerReducer from "../slice/coustomerSclie"
export const store = configureStore({
    reducer:{
        custormers : customerReducer
    }
})