"use client"
import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('saga-blue');

    useEffect(() => {
        const themeLink = document.getElementById('theme-link');
        if (themeLink) {
            themeLink.href = `/themes/${theme}/theme.css`;
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
