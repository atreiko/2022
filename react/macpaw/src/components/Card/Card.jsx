import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavButton } from '../UI'

import styles from './Card.module.css'

const Card = ({id, path, title, color, image}) => {
  return (
    <li className={styles.card}>
      <NavLink to={path}>
        <div className={[styles.image, styles[color]].join(' ')}>
          <div className={styles[image]}></div>
        </div>
        <NavButton title={title} />
      </NavLink>
    </li>
  )
}

export default Card