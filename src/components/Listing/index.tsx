import { useState } from "react";
import "./styles.css";
import type { ProductDTO } from "../../models/product";
import * as productService from '../../services/product-service';
import ProductCard from "../ProductCard";

export default function Listing() {

  const [products, setProducts] = useState<ProductDTO[]>(
    productService.findByPrice(0, Number.MAX_VALUE)
  );

  return (
    <section className="card listing">
     {
      products.map(
        product => <ProductCard key={product.id} product={product} />
      )
     }
    </section>
  );
}
