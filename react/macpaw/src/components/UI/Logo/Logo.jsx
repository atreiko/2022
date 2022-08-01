import React from 'react'
import { Link } from 'react-router-dom'
import paw from './paw.png'

import styles from './Logo.module.css'

const Logo = () => {
  return (
    <Link to='/' className={styles.wrapper}>
      <img src={paw} alt='logo' />
      <span>PetsPaw</span>
    </Link>
  )
}

export default Logo