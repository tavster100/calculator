import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]); //hook =>[ state -> "green" , updater -> ()=>{} ]

export default ThemeContext;
