import "./UncontrolledLogin.scss";

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
    <form onSubmit={handleLogin} className="mt-8 space-y-6 w-96">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Uncontrolled Login:
      </h2>
      <div className="rounded-md shadow-sm -space-y-px">
        <input
          name="username"
          placeholder="Username"
          required
          className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
      </div>
      <div className="flex items-center">
        <label name="remember" className="ml-2 block text-sm text-gray-900">
          Remember:
        </label>
        <input
          name="remember"
          type="checkbox"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
          border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-row">
        <button
          type="submit"
          className="group relative flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600"
        >
          Login
        </button>
        <button
          type="reset"
          className="group relative flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

// Ej: Uncontrolled Forms- 2:

//La principal ventaja es que los valores de cada input se capturan automaticamente como key/value
// sin necesidad de usar un state para cada uno de ellos.

//Como desventaja tiene que no permite controlar de una manera más precisa cada variable o cada input.
