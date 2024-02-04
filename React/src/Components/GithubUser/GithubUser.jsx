import { useGithubUser } from "../CustomHooks/useGithubUser";

export function GithubUser({ username }) {

  const { data, loading, error } = useGithubUser(username);

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
