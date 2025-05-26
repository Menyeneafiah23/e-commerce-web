import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, ProductsResponse } from "../../types/product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      ProductsResponse & { products: Product[] },
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `products?limit=${limit}&skip=${skip}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Merge new results with existing ones when loading more
      merge: (currentCache, newItems) => {
        if (currentCache && newItems) {
          return {
            ...newItems,
            products: [...currentCache.products, ...newItems.products],
          };
        }
        return newItems;
      },
      // Only refetch when skip changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },
    }),
  }),
});
export const { useGetProductsQuery } = apiSlice;
