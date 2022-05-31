import React from 'react'
import styles from './NotFoundPage.module.css'
import { useLocation } from 'react-router-dom'

const NotFoundPage = () => {
  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <p>No match for <u>{location.pathname}</u></p>
    </div>
  )
}

export default NotFoundPage