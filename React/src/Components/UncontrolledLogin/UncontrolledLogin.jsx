export function UncontrolledLogin() {
  function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === "on" ? true : false,
    };
    console.log("New Login: ", data);
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Uncontrolled Login:</h2>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <label name="remember"> Remember: </label>
      <input name="remember" type="checkbox" />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}

// Ej: Uncontrolled Forms- 2:

//La principal ventaja es que los valores de cada input se capturan automaticamente como key/value
// sin necesidad de usar un state para cada uno de ellos.

//Como desventaja tiene que no permite controlar de una manera más precisa cada variable o cada input.
