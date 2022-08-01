import React from 'react'
import eye from './eye-dark.svg'
import switcher from './switcher-dark.svg'
import circle from './circle-dark.svg'

import styles from './IconsDark.module.css'

const IconsDark = ({ onClick }) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <div>
        <img src={eye} alt='eye' />
      </div>
      <div className={styles.switch}>
        <img src={switcher} alt='switcher' />
        <img src={circle} alt='eye' />
      </div>
    </div>
  )
}

export default IconsDark