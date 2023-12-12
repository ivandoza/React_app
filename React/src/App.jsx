import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name="Ivan" age={25} />
    </div>
  );
}

//Components-3:
//Se puede usar el componente Hello más de una vez, se repetirá su contenido tantas veces.
//Se puede renderizar el componente Message desde el componente App, con el mismo resultado.
