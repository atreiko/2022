import React, { useContext } from 'react'
import { ThemeContext, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '../../context/ThemeProvider'

import styles from './ThemeSwitcher.module.css'

const ThemeSwitcher = () => {
  const isTheme = useContext(ThemeContext)

  return (
    <div className={styles.wrapper}>
      <h3>Current theme: <span>{isTheme.theme}</span></h3>
      <div className={styles.buttons}>
        <button onClick={() => isTheme.change(THEME_DARK)}>Dark</button>
        <button onClick={() => isTheme.change(THEME_LIGHT)}>Light</button>
        <button onClick={() => isTheme.change(THEME_NEUTRAL)}>Neutral</button>
      </div>
    </div>
  )
}

export default ThemeSwitcher