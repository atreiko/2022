import React, { useState } from 'react'
import burger from './burger.svg'
import cancel from './cancel.svg'

import styles from './Burger.module.css'

const Burger = ({ onClick, isOpen }) => {
  return (
    <div className={styles.burger} onClick={onClick} >
      <img src={isOpen ? cancel : burger} alt='menu' />
    </div>
  )
}

export default Burger