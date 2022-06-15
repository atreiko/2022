import React from 'react'
import { ThemeSwitcher } from '../../components'

import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <ThemeSwitcher />
    </div>
  )
}

export default HomePage