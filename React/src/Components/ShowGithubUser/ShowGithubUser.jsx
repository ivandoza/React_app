import React from "react";
import { GithubUser } from "../GithubUser/GithubUser";
import { useParams } from "react-router-dom";
import { useGithubUser } from "../CustomHooks/useGithubUser";

export function ShowGithubUser() {
  const { username } = useParams();

  const { data, loading, error } = useGithubUser(username);

  return (
    <div>
      {loading && <h4>Loading...</h4>}
      {error && <h4>There has been an error</h4>}
      {data && <GithubUser username={username} />}
    </div>
  );
};

