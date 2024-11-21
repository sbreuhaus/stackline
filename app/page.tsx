
import type { Metadata } from "next";
import { ProductsWrapper } from "./components/productsWrapper/ProductsWrapper";

export default function IndexPage() {
  return (
      <ProductsWrapper />
  )
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
