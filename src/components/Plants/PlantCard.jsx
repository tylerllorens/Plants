import "./Plants.css";

export default function PlantCard({ plant, addToCart }) {
  console.log(plant);
  return (
    <li className="plant-card">
      <figure>{plant.image}</figure>
      <h2>{plant.name}</h2>
      <button onClick={() => addToCart(plant)}>Add to Cart</button>
    </li>
  );
}
