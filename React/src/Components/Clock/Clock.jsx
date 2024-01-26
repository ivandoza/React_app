import { useState, useEffect } from "react";
import classes from './Clock.module.scss'

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      // console.log("Date updated");

      setDate(new Date());
    }, 1000);
  }, []);
  return <h2 className={classes.clock}>{date.toLocaleTimeString()}</h2>;
}
