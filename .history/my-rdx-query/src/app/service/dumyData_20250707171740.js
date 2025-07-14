import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi= createApi({
    reducerPath:"products",
    baseQuery:fetchBaseQuery({baseUrl:"https://dummyjson.com"}),
    // Get all products
    endpoints: (builder) =>({
        getAllProduct : builder.query({
            query : ()=> '/products',
        }),
         //  Get product by id
    getProductById :builder.query({
        query:(id)=> `/products/${id}`
    }),
    addNewProducts
    }),
   

})

export const {useGetAllProductQuery,useGetProductByIdQuery} = productsApi;