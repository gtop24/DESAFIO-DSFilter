import "./styles.css";
import type { ProductDTO } from "../../models/product";
import ProductCard from "../ProductCard";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
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
