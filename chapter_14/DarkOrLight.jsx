import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContext />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;