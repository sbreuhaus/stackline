"use client"

import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import { useState } from "react";
import TablePagination from '@mui/material/TablePagination';
import { Featured } from "../featured/Featured";
import { ProductsTable } from "../productsTable/ProductsTable";
import styles from "./ProductsWrapper.module.css"
// import { Review, SalesRecord, Product } from '../../../types/products';

export const ProductsWrapper = () => {
    //const [product, setProduct] = useState();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const { data: products, isError, isLoading, isSuccess } = useGetProductsQuery();

    // Handle pagination changes
    // const handleChangePage = (event: unknown, newPage: number) => {
    //     setPage(newPage);
    // };

    // const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setRowsPerPage(parseInt(event.target.value, 10));
    //     setPage(0); // Reset to the first page
    // };
    
    if (isError) {
        return (
          <div>
            <h1>There was an error!!!</h1>
          </div>
        );
      }
    
    if (isLoading) {
        return (
          <div>
            <h1>Loading...</h1>
          </div>
        );
    }

    if(isSuccess){
        return (
            <div className={styles.wrapper}>
            <Featured products={products}/>
            <ProductsTable products={products}/>
            </div>
        )
    }

}


// <div className={styles.wrapper}>
// <table>
//     <thead>
//     <tr>
//         <th>ID</th>
//         <th>Name</th>
//         <th>Sales</th>
//     </tr>
//     </thead>
//     <tbody>
//         {products[0].sales.map((sale, i) => (
//         <tr key={i}>
//             <td>{sale.unitsSold}</td>
//         </tr>
//         ))} 
//     </tbody>
// </table>        
// </div>
 