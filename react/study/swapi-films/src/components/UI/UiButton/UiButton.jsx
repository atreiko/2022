import React from 'react'
import PropTypes from 'prop-types'

import '../index.css'
import styles from './UiButton.module.css'

const UiButton = ({ 
  text, 
  disabled, 
  onClick,
  theme='dark',
  classes
}) => {
  return (
    <button 
      className={[styles.btn, styles[theme], classes].join(' ')}  
      onClick={onClick} 
      disabled={disabled}
    > 
      {text}
    </button>
  )
}

UiButton.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  theme: PropTypes.string,
}

export default UiButton