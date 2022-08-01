import React from 'react'
import up from './images/up.svg'
import down from './images/down.svg'

import styles from './SortAZ.module.css'

const SortAZ = ({ state='up', sortAZ, sortZA }) => {
  return (
    <div 
      className={[styles.sort, styles[state]].join(' ')}
      onClick={
        sortAZ ? () => sortAZ() : () => sortZA()
      }
    >
      <img 
        src={state === 'down' ? down : up} 
        alt='sort' 
      />
    </div>
  )
}

export default SortAZ