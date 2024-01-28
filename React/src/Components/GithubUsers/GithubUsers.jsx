import { useState } from "react";
import { GithubUser } from "../GithubUser/GithubUser";

export function GitHubUsers() {
  const [users, setUsers] = useState(['ivandoza']);
  const [userInput, setUserInput] = useState("");

  const handleUserImput = (e) => setUserInput(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() !== "") {
      setUsers([...users, userInput]);
      setUserInput("");
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <h5>Search Github user:</h5>
        <input name="username" value={userInput} type="text" onChange={handleUserImput} />
        <button>Search</button>
      </form>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <GithubUser username={user} />
          </li>
        ))}
      </ul>
      </div>
  );
}