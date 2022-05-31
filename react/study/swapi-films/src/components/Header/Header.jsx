import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.menu}>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/people/?page=1'>People</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header