import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dumyData";
import { LinearScale } from "chart.js";

export const store = configureStore({
    reducer : {
        [productsApi.reducerPath]:productsApi.reducer,
         
    },
    middleware:(getDefaultMiddlewere) =>
        getDefaultMiddlewere().concat(productsApi.middleware),

});

LinearScale