import { useRef, useEffect } from "react";

export function FocuseableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form>
      <br></br>
      Focuseable input:
      <input ref={inputRef} type="text" />
    </form>
  );
}
