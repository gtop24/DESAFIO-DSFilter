import { useState } from "react";
import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextProductsCount } from "./utils/context-products";
import * as productService from './services/product-service';

export default function App() {

  const [contextProductsCount, setContextProductsCount] = useState<number>(
    productService.findByPrice(0, Number.MAX_VALUE).length
  );

  return (
    <>
      <ContextProductsCount.Provider
        value={{ contextProductsCount, setContextProductsCount }}
      >
        <Header />
        <ListingBody />
      </ContextProductsCount.Provider>
    </>
  );
}
