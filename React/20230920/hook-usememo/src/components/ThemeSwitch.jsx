import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../DarkMode';

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return <button onClick={toggleTheme}>ThemeSwitch</button>;
}
