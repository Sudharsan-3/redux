import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";

export const productsApi= createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    // Get all products
    endpoints: (builder) =>({
        getAllProduct : builder.query({
            query : ()=> '/products',
        }),
        
    }),
    //  Get product by id
    GetProductById :builder.query({
        query:(id)=> `/products/${id}`
    })

})

export const {useGetAllProductQuery} = productsApi;