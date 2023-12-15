import { useState, useEffect } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      // console.log("Date updated");

      setDate(new Date());
    }, 1000);
  }, []);
  return <h2>{date.toLocaleTimeString()}</h2>;
}
