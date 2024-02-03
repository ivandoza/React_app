import { useEffect, useState } from "react";

export function GithubUser({ username }) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getGithubUser(username) {
    try {
      setLoading(true);
      setError(null);
      const user = await fetch(`https://api.github.com/users/${username}`);
      const response = await user.json();
      setData(response)
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getGithubUser(username);
  }, [username]);
  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {error && <h4>There has been an error</h4>}
      {data && (
        <div>
          <p>Username: {data.login}</p>
          <img width={"60px"} src={data.avatar_url} alt="github avatar" />
          <p>Name: {data.name}</p>
        </div>
      )}
    </div>
  );
}
