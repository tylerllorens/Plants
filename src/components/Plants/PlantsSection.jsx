import "./Plants.css";
import PlantCard from "./PlantCard";

export default function PlantsSection({ plants, addToCart }) {
  return (
    <section className="plants-grid">
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
