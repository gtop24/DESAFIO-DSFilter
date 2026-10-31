import type { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="product">
      <p className="product-name">{product.name}</p>
      <p className="product-price">R$ {product.price.toFixed(2)}</p>
    </div>
  );
}
