import { Welcome } from "../Welcome/Welcome";
import { useState } from "react";

export function InteractiveWelcome() {
  const [name, setName] = useState("");

  function handleInputName(e) {
    const value = e.target.value;
    setName(value);
  }

  return (
    <div>
      <hr></hr>
      <label name="name">Your Name: </label>
      <input name="name" value={name} onChange={handleInputName} />
      <Welcome name={name} />
    </div>
  );
}
