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

export function App() {
  function handleShowTime() {
    const now = new Date();
    alert(`The current time is: ${now.toLocaleTimeString()}`);
  }
  function printLoginData(dat) {
    console.log("New Login:", dat);
  }

  const [language, setLanguage] = useState("en");

  function handleSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <>
      <Container title={<h1>This is my awesome app!</h1>}>
        <Hello />
        <Welcome name="Ivan" age={25} />
        <AlertClock clickDate={handleShowTime} />
        <Counter initial={0} amount={1} />
          <LanguageContext.Provider value={language}>
            <Clock>
            <button
              className="button-language" onClick={() => handleSetLanguage("en")}> EN
            </button>
            <button
              className="button-language" onClick={() => handleSetLanguage("es")}> ES
            </button>
            </Clock>
          </LanguageContext.Provider>
        <MouseClicker />
        <InteractiveWelcome />
        <Login onLogin={printLoginData} />
        <UncontrolledLogin />
        {/* <React.StrictMode>
          <Ref />
        </React.StrictMode> */}
        <Colors
          colores={[
            { id: 1, name: "Red" },
            { id: 2, name: "Green" },
            { id: 3, name: "Black" },
            { id: 4, name: "Blue" },
            { id: 5, name: "White" },
          ]}
        />
        <TodoList />
      <GitHubUsers />
      </Container>
      <FocuseableInput />
    </>
  );
}

//Ej: Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.

//Ej: Props-1:
//Se puede establecer valores por defecto con defaultProps
