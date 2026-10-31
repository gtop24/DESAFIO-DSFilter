import "./styles.css";

export default function Filter() {
  return (
    <section className="card">
      <form className="filter-form">
        <input type="number" name="minPrice" placeholder="Preço mínimo" />
        <input type="number" name="maxPrice" placeholder="Preço máximo" />
        <button type="submit">Filtrar</button>
      </form>
    </section>
  );
}
