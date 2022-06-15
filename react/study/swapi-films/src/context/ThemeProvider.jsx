import React, { useState } from 'react'
import { changeCssVariable } from '../services/changeCssVariables'

export const THEME_DARK = 'dark';
export const THEME_LIGHT = 'light';
export const THEME_NEUTRAL = 'neutral';

export const ThemeContext = React.createContext()

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState('dark')

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

