import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser(username) {
    try {
      setLoading(true);
      setError(null);
      const user = await fetch(`https://api.github.com/users/${username}`);
      const response = await user.json();
      setData(response);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchGithubUser(username);
  }, [username]);
  return { data, loading, error };
}
