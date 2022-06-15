import React from 'react'
import PropTypes from 'prop-types'

import '../index.css'
import styles from './UiInput.module.css'
import CancelIcon from '../../../assets/CancelIcon'

const UiInput = ({
  type = 'text', 
  value, 
  handleInputChange, 
  placeholder, 
  classes
}) => {
  return (
    <div className={[styles.wrapper, classes].join(' ')}>
      <input 
        type={type} 
        value={value} 
        onChange={(e) => handleInputChange(e.target.value)} 
        placeholder={placeholder} 
      />
      <CancelIcon handleInputChange={handleInputChange} value={!!value} />
    </div>
  )
}

UiInput.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
  classes: PropTypes.string
}

export default UiInput