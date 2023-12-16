import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { FocuseableInput } from "./FocuseableInput";

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
    </div>
  );
}

//Ej: Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.

//Ej: Props-1:
//Se puede establecer valores por defecto con defaultProps
