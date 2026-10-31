import { useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";
import type { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';

export default function ListingBody() {

  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE),
  );

  function handleFilter(min: number, max: number) {
    setProducts(productService.findByPrice(min, max));
  }

  return (
    <main className="container">
      <Filter onFilter={handleFilter}/>
      <Listing products={products}/>
    </main>
  );
}
