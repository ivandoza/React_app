import { Age } from "../Age/Age";

export function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
      {/* {age > 18 && <Age age={age} />}
      {typeof(age) == "number" && <Age age={age} />}
      {age > 18 && age < 65 && <Age age={age} />}
      {age > 18 && age < 65 && name === "John" && <Age age={age} />} */}
    </div>
  );
}
