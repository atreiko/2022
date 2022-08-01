import React from 'react'
import eye from './eye-light.svg'
import switcher from './switcher-light.svg'
import circle from './circle-light.svg'

import styles from './IconsLight.module.css'

const IconsLight = ({ onClick }) => {
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

export default IconsLight