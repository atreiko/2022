import React, { useState, createContext } from 'react'
import { changeCssVariable } from '../services/changeCssVariable'

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';

export const ThemeContext = createContext()

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('light')

  const change = name => {
    setTheme(name)
    changeCssVariable(name)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change
      }}
      {...props}
    >
      {children}
  </ThemeContext.Provider>
  )
}

export default ThemeProvider