import { useState, useEffect, useContext } from "react";
import classes from './Clock.module.scss'
import { LanguageContext } from "../LanguageContext/LanguageContext";

export function Clock() {
  const [date, setDate] = useState(new Date());

  const language = useContext(LanguageContext);

  useEffect(() => {
    setInterval(() => {
      // console.log("Date updated");

      setDate(new Date());
    }, 1000);
  }, []);
  return (
    <div>
      <h2>{language === "en" ? "Current time:" : "Hora actual:"}</h2>
      <h2 className={classes.clock}>{date.toLocaleTimeString()}</h2>
    </div>
  )
}
