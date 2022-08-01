import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Header, Cards } from '../'
import { Logo, ThemeSwitcher } from '../UI/'

import styles from './Sticky.module.css'

const Sticky = ({ tablet }) => {
  const [hide, setHide] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/voting') {
      setHide('hide')
    } else if (location.pathname === '/breeds') {
      setHide('hide')
    } else if (location.pathname === '/gallery') {
      setHide('hide')
    } else if (location.pathname === '/likes') {
      setHide('hide')
    } else if (location.pathname === '/favourites') {
      setHide('hide')
    } else if (location.pathname === '/dislikes') {
      setHide('hide')
    }
    
  }, [hide])

  return (
    <div className={[styles.wrapper, styles[hide]].join(' ')}>
      <Header />
      <h1>Hi intern!</h1>
      <p>Welcome to MI 2022 Front-end test</p>
      <h4>Lets start using The Cat API</h4>
      <Cards />
    </div>
  )
}

export default Sticky