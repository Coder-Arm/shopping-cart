import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath : 'productsApi',
    baseQuery : fetchBaseQuery({
        baseUrl : 'https://dummyjson.com/'
    }),
    endpoints : (builder) => ({
        getProducts : builder.query({
            query : () => 'products'
        })
    })
})

export const {useGetProductsQuery} = productsApi;
export default productsApi