import { Welcome } from "./Components/Welcome/Welcome";
import { Counter } from "./Components/Counter/Counter";
import { Route, Routes, Link } from "react-router-dom";
import { GithubUserList } from "./Components/GithubUserList/GithubUserList";
import { ShowGithubUser } from "./Components/ShowGithubUser/ShowGithubUser";

export function App() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> |{" "}
      <Link to="/users">Users</Link> |{" "}
      <Link to="/users/ivandoza">My GitHub</Link>
      <hr />
      <Routes>
        <Route path="/" element={<Welcome name="Iván" age={25} />} />
        <Route path="/counter" element={<Counter initial={0} amount={1} />} />
        <Route path="/users">
          <Route
            index
            element={
              <>
                <h4>Select a user:</h4>
                <GithubUserList />
              </>
            }
          />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route
          path="*"
          element={
            <div>
              <p>Not found</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}
