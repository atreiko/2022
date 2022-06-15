import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../Cart/Cart'
import { ThemeContext, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '../../context/ThemeProvider'

import forDark from './img/01.svg'
import forLight from './img/02.svg'
import forNeutral from './img/03.svg'

import styles from './Header.module.css'

const Header = () => {
  const [icon, setIcon] = useState()
  const isTheme = useContext(ThemeContext)

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_DARK: setIcon(forDark)
        break;
      case THEME_LIGHT: setIcon(forLight)
        break;
      case THEME_NEUTRAL: setIcon(forNeutral)
        break;
      default: setIcon(forDark)
    }
  }, [isTheme])
  
  return (
    <div className={styles.header}>
    
      <ul className={styles.menu}>
        <li>
          <NavLink to='/search'>Search</NavLink>
        </li>
        <li>
          <NavLink to='/people/?page=1'>People</NavLink>
        </li>
        <li>
          <NavLink to='/'>
            <img className={styles.logo} src={icon} alt='icon' />
          </NavLink>
        </li>
      </ul>
      <Cart />
    </div>
  )
}

export default Header