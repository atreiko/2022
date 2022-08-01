import React from 'react'
import { Logo, ThemeSwitcher } from '../UI/'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <ThemeSwitcher />
    </header>
  )
}

export default Header