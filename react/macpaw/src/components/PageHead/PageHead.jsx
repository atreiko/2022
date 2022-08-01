import React, { useState } from 'react'
import { Burger, Search } from '../UI'
import { NavLink } from 'react-router-dom'
import { Menu } from '../'

import styles from './PageHead.module.css'

const setActive = ({ isActive }) => isActive ? [styles.link, styles['active-link']].join(' ') : styles.link

const PageHead = ({ setQuery }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleBurger = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.wrapper}>
      <Burger onClick={toggleBurger} isOpen={isOpen} />
      <Search setQuery={setQuery} />
      <NavLink to='/likes' className={setActive} />
      <NavLink to='/favourites' className={setActive} />
      <NavLink to='/dislikes' className={setActive} />
      { isOpen && <Menu toggleBurger={toggleBurger} /> }
    </div>
  )
}

export default PageHead