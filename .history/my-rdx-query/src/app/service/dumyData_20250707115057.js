import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi= createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    // Get all products
    endpoints: (builder) =>({
        getAllProduct : builder.query({
            query : ()=> '/products',
        }),
    }),

})

export const {} = productsApi'