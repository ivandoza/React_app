export function MouseClicker() {

  function handleButtonButton(e) {
    console.log(e.target.name);
  }
  function handleImageClick(e) {
    console.log(e.target.src);
    e.stopPropagation();
  }

  return (
    <button name="One" onClick={handleButtonButton}>
      <img onClick={handleImageClick} src="\vite.svg" width={25} />
      Click
    </button>
  );
}

//Ej: Handling Events-2:
//Con stopPropagation() se evita que se imprima en la consola el nombre del botón cuando se hace click la imagen.
//Solo se imprime el nombre cuando hacemos click en el botón, fuera de la imagen.

