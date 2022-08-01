import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import styles from './Page.module.css'

const Page = ({ children, classes }) => {
  const [tablet, setTablet] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      setTablet('tablet')
    } else if (location.pathname === '/breeds') {
      setTablet(null)
    } else if (location.pathname === '/gallery') {
      setTablet(null)
    } else if (location.pathname === '/likes') {
      setTablet(null)
    } else if (location.pathname === '/favourites') {
      setTablet(null)
    } else if (location.pathname === '/dislikes') {
      setTablet(null)
    }
    
  }, [tablet])

  return (
    <div className={[styles.wrapper, styles[classes], styles[tablet]].join(' ')}>
      {children}
    </div>
  )
}

export default Page