import { createContext , useState} from "react";

const ThemeContext = createContext<[string, (theme:string)
    =>void]>([
    "green", 
    () => {}
]); // hook =>[ state -> "green" , updater -> ()=>{} ]

export default ThemeContext;
