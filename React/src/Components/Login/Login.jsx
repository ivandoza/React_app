import { useState } from "react";

function createData() {
  return {
    username: "",
    password: "",
    remember: false,
  };
}

export function Login({ onLogin }) {
  const [data, setData] = useState(createData());

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const type = e.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleReset() {
    setData(createData());
  }

  function handleLogin(e) {
    e.preventDefault();
    onLogin(data);
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login:</h2>
      <input
        name="username"
        value={data.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <label name="remember"> Remember: </label>
      <input
        name="remember"
        type="checkbox"
        checked={data.remember}
        onChange={handleInputChange}
      />
      <button type="submit" disabled={!data.password || !data.username}>Login</button>
      <button
        disabled={!data.password && !data.username && data.remember != true}
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
}

//Ej: Controlled Forms- 5:
//Para evitar el comportamiento por defecto del formulario se usa el metodo preventDefault()
