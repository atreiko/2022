import React from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from './navItems'
import { Card } from '../'

import styles from './Cards.module.css'

const Cards = () => {
  return (
    <ul className={styles.cards}>
      {navItems.map(({id, path, title, color, image}) => (
        <Card 
          key={id}
          id={id}
          path={path}
          title={title}
          color={color}
          image={image}
        />
      ))}
    </ul>
  )
}

export default Cards