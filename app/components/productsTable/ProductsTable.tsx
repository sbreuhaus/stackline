"use client"

import { useGetProductsQuery } from "@/lib/features/products/productsApiSlice";
import { useState } from "react";
import { Review, SalesRecord, Product } from '../../../types/products';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from "./ProductsTable.module.css"

interface TableProps {
  products: Product[];
}
export const ProductsTable = ({ products }: TableProps) => {
   
  return (
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Week Ending</TableCell>
            <TableCell align="right">Retail Sales</TableCell>
            <TableCell align="right">Wholesale Sales</TableCell>
            <TableCell align="right">Units Sold</TableCell>
            <TableCell align="right">Retailer Margin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products[0].sales.map((sale, index) => {
            // Format sales and margin values
            const formattedRetailSales = (sale.retailSales / 1000).toFixed(3);
            const formattedWholesaleSales = (sale.wholesaleSales / 1000).toFixed(3);
            const formattedRetailerMargin = (sale.retailerMargin / 1000).toFixed(3);

            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {sale.weekEnding}
                </TableCell>
                <TableCell align="right">${formattedRetailSales}</TableCell>
                <TableCell align="right">${formattedWholesaleSales}</TableCell>
                <TableCell align="right">{sale.unitsSold}</TableCell>
                <TableCell align="right">${formattedRetailerMargin}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
    
}



 