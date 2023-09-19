import React from 'react';
import ThemeSwitch from './components/ThemeSwitch';
import ThemeComponent from './components/ThemeComponent';
import { createContext } from 'react';
import { useState } from 'react';

const ThemeContext = createContext();

function DarkMode() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            {/* provider는 값을 보내는 역할 */}
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <ThemeComponent />
                <ThemeSwitch />
            </ThemeContext.Provider>
        </div>
    );
}

export { DarkMode, ThemeContext };
