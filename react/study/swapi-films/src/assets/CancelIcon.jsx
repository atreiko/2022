import React from 'react'

const CancelIcon = ({ value, handleInputChange }) => {
  const styles = {
    cursor: 'pointer',
    overflow: 'hidden',
    zIndex: '2',
    transition: '.3s ease',
    opacity: value ? '1' : '0'
  }
  return (
    <svg 
      onClick={() => handleInputChange('')}
      version="1.1" 
      id="Layer_1" 
      x="0px" 
      y="0px" 
      viewBox="0 0 122.88 122.88" 
      width="15"
      style={styles}
    >
      <g>
        <path fill='#7c7c7c' d="M1.63,97.99l36.55-36.55L1.63,24.89c-2.17-2.17-2.17-5.73,0-7.9L16.99,1.63c2.17-2.17,5.73-2.17,7.9,0 l36.55,36.55L97.99,1.63c2.17-2.17,5.73-2.17,7.9,0l15.36,15.36c2.17,2.17,2.17,5.73,0,7.9L84.7,61.44l36.55,36.55 c2.17,2.17,2.17,5.73,0,7.9l-15.36,15.36c-2.17,2.17-5.73,2.17-7.9,0L61.44,84.7l-36.55,36.55c-2.17,2.17-5.73,2.17-7.9,0 L1.63,105.89C-0.54,103.72-0.54,100.16,1.63,97.99L1.63,97.99z"/>
      </g>
    </svg>
  )
}

export default CancelIcon