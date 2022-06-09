import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'
import { useSelector } from 'react-redux'

import styles from './Cart.module.css'

const Cart = () => {
  const [ count, setCount ] = useState(0)
  const favorites = useSelector(state => state.favorites)

  useEffect(() => {
    const length = Object.keys(favorites).length
    length.toString().length > 2 ? setCount('...') : setCount(length)
  }, [favorites])

  return (
    <div className={styles.cart}>
      <Link
        to='/favorites'
      >
        <span className={styles.counter}>{count}</span>
        <CartIcon />
      </Link>
    </div>
  )
}

export default Cart