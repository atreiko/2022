import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Sticky } from '../index.js'

import styles from './Layout.module.css'

const Layout = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <Sticky />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout