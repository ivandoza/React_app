import { useControlledForm } from "../CustomHooks/useControlledForm";

export function HookControlledForm({ onLogin }) {
  const { formData, handleInputChange } = useControlledForm("");

  function handleLogin(e) {
    e.preventDefault();
    onLogin(formData);
  }

  return (
    <form onSubmit={handleLogin}>
      <h2>Login:</h2>
      <input
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
      />
      <button type="submit" disabled={!formData.password || !formData.username}>
        Login
      </button>
    </form>
  );
}
