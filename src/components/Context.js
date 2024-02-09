import { createContext, useState } from "react";
import Products from "./Products";

const ThemeContext = createContext('light');
function Test() {
    const [theme, setTheme] = useState('light');
    <ThemeContext.Provider value={theme}>
        <Products />
    </ThemeContext.Provider>
}

export default Test; 