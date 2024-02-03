import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GithubUserList () {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGithubUser = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    getGithubUser();
  }, []);

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {error && <h4>There has been an error</h4>}
      {users && (
        <ul>
          {users.map((user) => (
            <li key={user.login}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
