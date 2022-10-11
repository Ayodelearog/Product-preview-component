import { useState, useEffect } from "react"
import "./theme-toggle.css"

export const Mode = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme("light" ? "dark" : "light");
    }

    useEffect(() => {
        document.body.className = theme;
      }, [theme]);


    return (
        <div className="dark-mode-button">
            <button type="button" id="toggle-btn" onClick={toggleTheme}>Dark Mode</button>
        </div>
    )
}