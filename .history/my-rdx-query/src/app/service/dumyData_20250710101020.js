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
    // addData
    addNewProducts : builder.mutation({
        query : (newProduct)=>({
            url :'/products/add',
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body :newProduct
        })
    }),
    updateProduct : builder.mutation({
        query :({id,updatedPeoduct})=({
            url:`/products/${id}`,
            method:'PUT',
            headers:{'Content-Type':'application-json'}
        })
    })
    }),
   

})

export const {useGetAllProductQuery,useGetProductByIdQuery,useAddNewProductsMutation} = productsApi;