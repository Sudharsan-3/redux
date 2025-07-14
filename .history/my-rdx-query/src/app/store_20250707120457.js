import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./service/dumyData";

export const store = configureStore({
    reducer : {
        [productsApi.reducerPath]:productsApi.reducer,
         
    },
    middleware:(getDefaultMiddlewere) =>
        getDefaultMiddlewere().concat(productsApi.middleware),

});

setupListeners