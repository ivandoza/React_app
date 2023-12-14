import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";

function handleShowTime() {
  const now = new Date();

  alert(`The current time is: ${now.toLocaleTimeString()}`);
}

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Ivan" age={25} />
      <AlertClock clickDate={handleShowTime} />
      <Counter initial={0} amount={1} />
    </div>
  );
}

//Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.
