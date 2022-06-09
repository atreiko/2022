import React from 'react'
import PropTypes from 'prop-types'

import styles from './PersonInfo.module.css'

const PersonInfo = ({ personInfo }) => {

  return (
    <ul>
      {personInfo.map(({title, data}) => (
        data && (
          <li key={title} className={styles.item}>
            <span>{title}: {data}</span>
          </li>
        )
      ))}
    </ul>
  )
}

PersonInfo.propTypes = {
  personInfo: PropTypes.array
}

export default PersonInfo