import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import goBack from './goback.svg'

import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
  const navigate = useNavigate()

  const handleGoBack = e => {
    e.preventDefault()
    navigate(-1)
  }

  return (
    <div className={styles.wrapper}>
      <Link 
        className={styles.link} 
        to='#' 
        onClick={handleGoBack}
      >
        <img className={styles.icon} src={goBack} alt='goBack' />
        <span>Go Back</span>
      </Link>
    </div>
  )
}

export default PersonLinkBack