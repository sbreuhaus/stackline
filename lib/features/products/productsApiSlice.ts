import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Review, SalesRecord, Product } from '../../../types/products';

// interface Review {
//     customer: string;
//     review: string;
//     score: number;
//   }
  
//   interface SalesRecord {
//     weekEnding: string; // ISO Date String
//     retailSales: number;
//     wholesaleSales: number;
//     unitsSold: number;
//     retailerMargin: number;
//   }
  
//   interface Product {
//     id: string;
//     title: string;
//     image: string;
//     subtitle: string;
//     brand: string;
//     reviews: Review[];
//     retailer: string;
//     details: string[];
//     tags: string[];
//     sales: SalesRecord[];
//   }
  
  // Define the type for the array of products
  //type ProductData = Product[];
  

// Create the API slice
export const productsApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }), // Base URL for your app (adjust if hosted differently)
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => 'data/products.json', // Path to the JSON file in the public folder
    }),
  }),
});

// Export the auto-generated hook for the query
export const { useGetProductsQuery } = productsApiSlice;
