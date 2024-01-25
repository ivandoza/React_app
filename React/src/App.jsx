import React from "react";
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

function handleShowTime() {
  const now = new Date();
  alert(`The current time is: ${now.toLocaleTimeString()}`);
}
function printLoginData(dat) {
  console.log("New Login:", dat);
}

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Ivan" age={25} />
      <AlertClock clickDate={handleShowTime} />
      <Counter initial={0} amount={1} />
      <Clock />
      <MouseClicker />
      <InteractiveWelcome />
      <Login onLogin={printLoginData} />
      <UncontrolledLogin />
      <FocuseableInput />
      <React.StrictMode>
        <Ref />
      </React.StrictMode>
      <Colors colores={[
          {id: 1, name: "Red"},
          {id: 2, name: "Green"},
          {id: 3, name: "Black"}
        ]}
      />
      <TodoList />
    </div>
  );
}

//Ej: Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.

//Ej: Props-1:
//Se puede establecer valores por defecto con defaultProps
