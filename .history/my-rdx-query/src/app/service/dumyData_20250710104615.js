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
        query :({id,updatedProduct})=>({
            url:`/products/${id}`,
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:updatedProduct
        })
    }),
    deleteProduct:builder.mutation({
        query :(id)=>({
            url:`/products/${id}`,
            
        })
    })

    }),
   

})

export const {useGetAllProductQuery,useGetProductByIdQuery,useAddNewProductsMutation,useUpdateProductMutation} = productsApi;