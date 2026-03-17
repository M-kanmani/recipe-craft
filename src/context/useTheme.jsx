import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
// Custom hook to access the ThemeContext values

export const useTheme = () => {
    return useContext(ThemeContext)
}
