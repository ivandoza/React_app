import { Color } from "../Color/Color";

export function Colors({ colores }) {
  return (
    <div>
      <h2>Color List:</h2>
      <ul>
        {colores.map((item) => (
          <Color key={item.id} color={item} />
        ))}
      </ul>
    </div>
  );
}
