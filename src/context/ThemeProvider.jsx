import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
export const ThemeProvider = ({children}) => {
    const [dark, setDark] = useState(true)
    return(
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}
