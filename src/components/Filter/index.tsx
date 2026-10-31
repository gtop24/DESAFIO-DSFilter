import { useState, type ChangeEvent, type SubmitEvent } from "react";
import "./styles.css";

type Props = {
  onFilter: (min: number, max: number) => void;
};

type FormData = {
  minPrice?: string;
  maxPrice?: string;
}

export default function Filter({ onFilter }: Props) {

  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const min = Number(formData.minPrice || 0);
    const max = Number(formData.maxPrice || Number.MAX_VALUE);
    onFilter(min, max);
  }

  return (
    <section className="card">
      <form className="filter-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="minPrice"
          value={formData.minPrice || ""}
          placeholder="Preço mínimo"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="maxPrice"
          value={formData.maxPrice || ""}
          placeholder="Preço máximo"
          onChange={handleInputChange}
        />
        <button type="submit">Filtrar</button>
      </form>
    </section>
  );
}
