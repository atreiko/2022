import React from 'react'
import { Cards } from '../'
import cancel from '../UI/Button/Burger/cancel.svg'

import styles from './Menu.module.css'

const Menu = ({ toggleBurger }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.cancel} onClick={toggleBurger} >
        <img src={cancel} alt='menu' />
      </div>
      <div className={styles.inner}>
        <Cards />
      </div>
    </div>
  )
}

export default Menu