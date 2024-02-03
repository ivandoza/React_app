import React, { useState } from "react";
import { Hello } from "./Components/Hello/Hello";
import { Welcome } from "./Components/Welcome/Welcome";
import { AlertClock } from "./Components/AlertClock/AlertClock";
import { Counter } from "./Components/Counter/Counter";
import { Clock } from "./Components/Clock/Clock";
import { MouseClicker } from "./Components/MouseClicker/MouseClicker";
import { InteractiveWelcome } from "./Components/InteractiveWelcome/InteractiveWelcome";
import { Login } from "./Components/Login/Login";
import { UncontrolledLogin } from "./Components/UncontrolledLogin/UncontrolledLogin";
import { FocuseableInput } from "./Components/FocuseableInput/FocuseableInput";
import { Ref } from "./Components/FocuseableInput/Ref";
import { Colors } from "./Components/Colors/Colors";
import { TodoList } from "./Components/TodoList/TodoList";
import { Container } from "./Components/Container/Container";
import { LanguageContext } from "./Components/LanguageContext/LanguageContext";
import { GitHubUsers } from "./Components/GithubUsers/GithubUsers";
import { GithubUser } from "./Components/GithubUser/GithubUser";
import { HookGithubUser } from "./Components/Hooks/HookGithubUser";
import { HookCounter } from "./Components/Hooks/HookCounter";
import { HookControlledForm } from "./Components/Hooks/HookControlledForm";
import { HookCurrentLocation } from "./Components/Hooks/HookCurrentLocation";
import { Hooks } from "./Components/Hooks/Hooks";
import { FilteredList } from "./Components/FilteredList/FilteredList";
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
