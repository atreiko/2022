import React from 'react'
import { Page } from '../../components'
import home from './home.svg'

import styles from './HomePage.module.css'

const HomePage = () => {

  return (
    <Page classes='home'>
      <img className={styles.image} src={home} alt='home' />
    </Page>
  )
}

export default HomePage