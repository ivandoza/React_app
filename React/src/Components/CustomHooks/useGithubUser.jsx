import useSWR from "swr";

export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
  );

  function handleRefreshUsers() {
    mutate();
  }

  if (username === null) {
    return { data: null, error: null, loading: false };
  }

  return {
    data,
    error,
    loading: !data && !error,
    onRefresh: handleRefreshUsers,
  };
}
