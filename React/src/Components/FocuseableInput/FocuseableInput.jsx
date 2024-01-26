import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export function FocuseableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" size="sm">
        <Form.Label>Focuseable input:</Form.Label>
        <Form.Control ref={inputRef} type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
