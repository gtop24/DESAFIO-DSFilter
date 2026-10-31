import { useContext, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";
import type { ProductDTO } from "../../models/product";
import * as productService from "../../services/product-service";
import { ContextProductsCount } from "../../utils/context-products";

export default function ListingBody() {
    
  const { setContextProductsCount } = useContext(ContextProductsCount);

  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE),
  );

  function handleFilter(min: number, max: number) {
    const newProducts = productService.findByPrice(min, max);
    setProducts(newProducts);
    setContextProductsCount(newProducts.length);
  }

  return (
    <main className="container">
      <Filter onFilter={handleFilter} />
      <Listing products={products} />
    </main>
  );
}
