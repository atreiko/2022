import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import back from '../UI/Button/BackButton/back.svg'

import styles from './PageContent.module.css'

const PageContent = ({ children }) => {
  const location = useLocation()
  const { id } = useParams()
  const navigate = useNavigate()

  const currentRoute = location.pathname.slice(1)
  const slashIndex = currentRoute.search('/')
  const current = currentRoute.substr(slashIndex + 's')

  return (
    <div className={styles.content}>
      <div className={styles.inner}>
        <button onClick={() => navigate(-1)} className={styles.back}><img src={back} alt='back' /></button>
        <button className={styles.current}>{current}</button>
        { id  && <button>{id}</button> } 
        { children }
      </div>
    </div>
  )
}

export default PageContent