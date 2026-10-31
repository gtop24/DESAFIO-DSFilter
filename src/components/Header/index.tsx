import { useContext } from "react";
import "./styles.css";
import { ContextProductsCount } from "../../utils/context-products";

export default function Header() {

  const { contextProductsCount } = useContext(ContextProductsCount);

  return (
    <header>
      <div className="container">
        <h1>DSFilter</h1>
        <p className="product-count">{contextProductsCount} produto(s)</p>
      </div>
    </header>
  );
}
