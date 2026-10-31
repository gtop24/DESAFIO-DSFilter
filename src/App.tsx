import Header from "./components/Header";

export default function App() {
  return (
    <body>
      <Header />

      <main className="main container">
        <section className="card">
          <form className="filter-form">
            <input type="number" name="minPrice" placeholder="Preço mínimo" />
            <input type="number" name="maxPrice" placeholder="Preço máximo" />
            <button type="submit">Filtrar</button>
          </form>
        </section>

        <section className="card listing">
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
          <div className="product">
            <p className="product-name">PC Gamer Pro</p>
            <p className="product-price">R$ 1200.00</p>
          </div>
        </section>
      </main>
    </body>
  );
}
