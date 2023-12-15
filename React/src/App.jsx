import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";

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
      <Clock />
      <MouseClicker />
      
    </div>
  );
}

//Ej: Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.
//Ej: Props-1:
//Se puede establecer valores por defecto con defaultProps

