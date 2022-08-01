import React from 'react'

import styles from './NavButton.module.css'

const NavButton = ({title }) => {
  return (
    <button 
      className={styles.button} 
    >
      <span>{title}</span>
    </button>
  )
}

export default NavButton